import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;`;

export const Header = styled.div`
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 25px 0;
  background: #438b87;
  border-radius: 0rem 0rem  3rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;



  > img {
    height: 80px;
    margin-right: 1rem;
  }
  h1{
    font-weight: 500;
    font-size: 32px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #dcdde1;
    cursor: default;

  }
  &:hover{

    transition: 1s;
  }
  span{

    color: #0a3d62;
    font-weight: 400;
    font-size: 32px;
  }
  button {
    margin-left: 80px;
    background: transparent;
    border: 0;
    transition: box-shadow 0.3s ease-in-out;

    svg {
      color: #dcdde1;
      width: 25px;
      height: 25px;
      transition: .2s;


    &:hover {
      transition: .2s;
      color: #626262;
    }
  }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  text-transform: capitalize;

  img {
    width: 65px;
    height: 65px;
    border-radius: 60%;
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.1);
    transition: .2s;
    &:hover {
      width: 68px;
      height: 68px;
      cursor: pointer;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
      }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #404143;
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: #dcdde1;
      font-size: 20px;
      transition: .1s;

      &:hover {
        transition: .2s;
        color: white;
      }
    }
  }
`;

export const Content = styled.div`
  width: 70%;
  margin: 64px auto;
  display: flex;
`;

export const FormContent = styled.div`
  background-color: #e0e1e3;
  box-shadow: 2px 1px 12px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 2rem;
  width: 100%;
  padding: 3rem;

  position: relative;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.12);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #404143;
    border-radius: 20px;
  }

  `;



export const Schedule = styled.div`
  flex: 1;
  width: 12REM;
  overflow-y: scroll;
  padding-right: 20px;

  height: 500px;
  box-shadow: inset 0px 30px 13px -30px rgba(0, 0, 0, 0.0), /* Top shadow */
              inset 0px -30px 15px -30px rgba(0, 0, 0, 0.1); /* Bottom shadow */;
  position: relative;
  border-radius: 0px 0px 10px 10px ;




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
    background: #404143;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;


    &::before {
      position: absolute;
      height: 85%;
      width: 3px;
      left: 0;
      content: "";
      background: #079992;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

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
  padding-top: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
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

`;
