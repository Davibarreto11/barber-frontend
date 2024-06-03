import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
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
      background: #404143;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #438b87;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: "";
      background: #38ada9;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: #38ada9;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #404143;
    width: 70px;

    svg {
      color: #38ada9;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #438b87;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.div`
  width: 380px;
  border-radius: 15px;

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
