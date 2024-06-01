import React, { useCallback, useEffect, useState } from "react";

import api from "../../services/api";

import { useAuth } from "../../hooks/Auth";

import elipse from "../../assets/Vector.svg"

import { FiCalendar, FiClock, FiLogOut } from "react-icons/fi";

import {
  Container,
  HeaderContent,
  Header,
  Profile,
  Content,
  Schedule,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  FormContent,
  FlexProvider,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}
import logoImg from "../../assets/logo.png";

const Providers: React.FC = () => {
  const { signOut, user, token } = useAuth();
  const navigate = useNavigate();

  const [providers, setProviders] = useState<Provider[]>([]);

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

  const navigateToProfile = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate(`/createAppointment/${providerId}`);
    },
    [navigate]
  );

  return (
    <Container>


      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Logo" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>
          <button onClick={signOut} type="button">
            <FiLogOut />
          </button>
        </HeaderContent>
      </Header>


      <Content>

        <FormContent>
          <Schedule>
            <h2>Cabeleireiros</h2>
            <ul
              style={{
                flex: 1,
                paddingTop: 32,
                paddingBottom: 24,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              {providers.map((provider) => (

                <ProviderContainer onClick={() => { navigateToCreateAppointment(provider.id);}}style={{ borderRadius: 10 }}>
                  <ProviderAvatar src={provider.avatar_url} />

                  <ProviderInfo>

                    <ProviderName>{provider.name}</ProviderName>
                    <FlexProvider>
                      <ProviderMeta>
                        <FiCalendar size={20} color="#438b87" />
                        <ProviderMetaText>Segunda à sexta</ProviderMetaText>
                      </ProviderMeta>

                      <ProviderMeta>
                        <FiClock size={20} color="#438b87" />
                        <ProviderMetaText>8h às 18h</ProviderMetaText>
                      </ProviderMeta>
                    </FlexProvider>
                    
                  </ProviderInfo>
                </ProviderContainer>
              ))}
            </ul>
          </Schedule>
        </FormContent>


      </Content>
    </Container>
  );
};

export default Providers;
