import styled from "styled-components";
import userback from "../../assets/userback.jpg"
import cardback from "../../assets/backCard.jpg"
import elipse from "../../assets/Vector.svg"

// import { Flat } from 'react-native'

export const Container = styled.div`
height: 100vh;
background: url(${userback}) 100% no-repeat;
  background-size: cover;

`;



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
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    width: 65px;
    height: 65px;
    border-radius: 60%;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #404143;
    }

    a {
      text-decoration: none;
      color: #404143;
      font-size: large;
      transition: .1s;

      &:hover {
        transition: .2s;
        color: #dcdde1;
      }
    }
  }
`;




export const Content = styled.div`
  width: 70%;
  margin: 5rem auto 0px auto;
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

  position: relative;

`;


export const Schedule = styled.div`

  /* margin-right: 120px; */
  align-items: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    color: #404143;
    text-transform: capitalize;
    font-size: 40px;
    font-weight: 800 ;
    padding-top: 1.5rem;
  }
  ul{
    width: 80%;
      margin-bottom: 2rem;
  }
  p {
    margin-top: 8px;
    color: #404143;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
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




export const ProviderContainer = styled.button`
  position: relative;
  transition: .1s;
  width: 100%;
  background: url(${cardback}) 100% no-repeat;
  background-size: cover;
  box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.2);
  padding: 18px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border: 0;
  display: flex;
  align-items: center;
  gap: 3rem;


  &:hover{
    transition: .2s;
    padding: 25px 18px;
  }
`;

export const ProviderAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 36px;

`;
export const ProviderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 20px;
  justify-content: space-between;
  width: 70%;
`;

export const ProviderName = styled.span`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500;
  color: #404143;
`;
export const FlexProvider = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: baseline;

`;
export const ProviderMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
`;
export const ProviderMetaspan = styled.span`
  margin-left: 8px;
  color: #404143;

`;

export const ProviderMetaText = styled.span`
  margin-left: 8px;
  color: #404143;

`;
