import React, { useEffect, useCallback, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { FiChevronLeft, FiLogOut } from "react-icons/fi";
import { useToast } from "../../hooks/Toast";

import { useAuth } from "../../hooks/Auth";
import api from "../../services/api";
import "react-day-picker/src/style.css";
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  Content,
  ProvidersListContainer,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  Calendar,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Schedule,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
  HeaderContent,
  Profile,
} from "./styles";

interface RouteParams {
  providerId: string;
}

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState("");

  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const navigateToProfile = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  useEffect(() => {
    api
      .get("providers/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProviders(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedProvider) {
      api
        .get(`/providers/${selectedProvider}/day-availability`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: selectedDate.getMonth() + 1,
            year: selectedDate.getFullYear(),
            day: selectedDate.getDate(),
          },
        })
        .then((response) => {
          setAvailability(response.data);
        });
    }
  }, [selectedDate, selectedProvider]);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleDateChange = useCallback((date: Date) => {
    setShowDatePicker(false);
    setSelectedDate(date);
  }, []);

  const handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour);
  }, []);

  const handleCreateAppointment = useCallback(async () => {
    try {
      const date = new Date(selectedDate);

      date.setHours(selectedHour);
      date.setMinutes(0);

      await api.post(
        "appointments",
        {
          provider_id: selectedProvider,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      addToast({
        type: "success",
        title: "Agendamento criado com sucesso",
        description: "",
      });
    } catch (err) {
      addToast({
        type: "error",
        title: "Error ao criar agendamento",
        description: "",
      });
    }
  }, [navigate, selectedDate, selectedHour, selectedProvider]);

  const morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), "HH:00"),
        };
      });
  }, [availability]);

  const afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour >= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), "HH:00"),
        };
      });
  }, [availability]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackButton onClick={navigateBack}>
            <FiChevronLeft size={24} color="#999591" />
          </BackButton>

          <Profile>
            <UserAvatar src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button onClick={navigateToProfile}>
            <FiLogOut />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <HeaderTitle>Cabeleireiros</HeaderTitle>
        <ProvidersListContainer>
          {providers.map((provider) => (
            <ProviderContainer
              key={provider.id}
              onClick={() => handleSelectProvider(provider.id)}
              selected={provider.id === selectedProvider}
            >
              <ProviderAvatar src={provider.avatar_url} />
              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          ))}
        </ProvidersListContainer>
        <Calendar>
          <Title>Escolha a data</Title>

          <OpenDatePickerButton onClick={handleToggleDatePicker}>
            <OpenDatePickerButtonText>
              Selecionar outra data
            </OpenDatePickerButtonText>
          </OpenDatePickerButton>

          {showDatePicker && (
            <DayPicker
              className="DayPicker"
              modifiersClassNames={{
                selected: "selected",
                disabled: "disabled",
                outside: "outside",
                available: "available",
              }}
              selected={selectedDate}
              onDayClick={handleDateChange}
            />
          )}
        </Calendar>

        <Schedule>
          <Title>Escolha o horário</Title>

          <Section>
            <SectionTitle>Manhã</SectionTitle>

            <SectionContent>
              {morningAvailability.map(({ hourFormatted, available, hour }) => (
                <Hour
                  available={available}
                  key={hourFormatted}
                  disabled={!available}
                  selected={selectedHour === hour}
                  onClick={() => handleSelectHour(hour)}
                >
                  <HourText selected={selectedHour === hour}>
                    {hourFormatted}
                  </HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Tarde</SectionTitle>

            <SectionContent>
              {afternoonAvailability.map(
                ({ hourFormatted, available, hour }) => (
                  <Hour
                    available={available}
                    key={hourFormatted}
                    disabled={!available}
                    selected={selectedHour === hour}
                    onClick={() => handleSelectHour(hour)}
                  >
                    <HourText selected={selectedHour === hour}>
                      {hourFormatted}
                    </HourText>
                  </Hour>
                )
              )}
            </SectionContent>
          </Section>
        </Schedule>

        <CreateAppointmentButton onClick={handleCreateAppointment}>
          <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
        </CreateAppointmentButton>
      </Content>
    </Container>
  );
};

export default CreateAppointment;