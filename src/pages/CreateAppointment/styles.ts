import styled from "styled-components";

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HoursProps {
  available: boolean;
  selected: boolean;
}

interface HourspanProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  padding: 32px 0;
  background: #438b87;
`;

export const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: 80px;
    background: transparent;
    border: 0;
    transition: box-shadow 0.3s ease-in-out;

    svg {
      color: #404143;
      width: 20px;
      height: 20px;
    }

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #404143;
    }

    a {
      text-decoration: none;
      color: #404143;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const Content = styled.div`
  width: 70%;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
    color: #404143;
  }

  p {
    margin-top: 8px;
    color: #404143;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background: #438b87;
      margin: 0 8px;
    }
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding-right: 8px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h1`
  color: #404143;
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 24px;
  margin-right: auto;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ProvidersListContainer = styled.div`
  height: 112px;
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

export const ProviderContainer = styled.button<ProviderContainerProps>`
  background: ${(props) => (props.selected ? "#0a3d62" : "#438b87")};
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProviderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const ProviderName = styled.span<ProviderNameProps>`
  margin-left: 8px;
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 16px;
  color: #f4ede8;
`;

export const Title = styled.h2`
  font-family: "RobotoSlab-Medium", sans-serif;
  color: #404143;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const OpenDatePickerButton = styled.button`
  height: 46px;
  margin-bottom: 20px;
  padding: 10px;
  background: #438b87;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const OpenDatePickerButtonText = styled.span`
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 16px;
  color: #f4ede8;
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  color: #404143;
  font-family: "RobotoSlab-Regular", sans-serif;
  margin-bottom: 10px;
`;

export const SectionContent = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const Hour = styled.button<HoursProps>`
  padding: 12px;
  background: ${(props) => (props.selected ? "#0a3d62" : "#438b87")};
  margin-right: 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.available ? 1 : 0.4)};
`;

export const HourText = styled.span<HourspanProps>`
  color: #f4ede8;
  font-family: "RobotoSlab-Regular", sans-serif;
  font-size: 16px;
`;

export const CreateAppointmentButton = styled.button`
  height: 50px;
  background: #438b87;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const CreateAppointmentButtonText = styled.span`
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 18px;
  color: #f4ede8;
`;

export const Calendar = styled.div`
  width: 380px;
  border-radius: 15px;
  padding: 10px;

  .DayPicker {
    background: #079992;
    border-radius: 10px;
    padding: 20px;
    width: 87%;
    text-transform: capitalize;
    transition: box-shadow 0.3s ease-in-out;
  }

  .available:not(.outside) {
    background: #0a3d62;
    border-radius: 10px;
    color: #fff;
    margin: 2px;
    width: 37px;
    height: 37px;
  }

  .disabled {
    color: #000 !important;
    background: transparent !important;
  }

  .selected {
    background: #38ada9 !important;
    border-radius: 10px;
    color: #232129 !important;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;
