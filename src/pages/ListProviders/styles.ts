import styled from "styled-components";
// import { Flat } from 'react-native'

export const Container = styled.div``;

export const Header = styled.div`
  padding: 32px 0;
  background: #438b87;

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
export const ProviderContainer = styled.button`
  width: 100%;
  background: #438b87;
  padding: 20px;
  margin-bottom: 16px;
  border: 0;

  display: flex;
  align-items: center;
`;
export const ProviderAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;
export const ProviderInfo = styled.div`
  margin-left: 20px;
`;

export const ProviderName = styled.span`
  font-family: "RobotoSlab-Medium";
  font-size: 18px;
  color: #404143;
`;
export const ProviderMeta = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;
`;
export const ProviderMetaspan = styled.span`
  margin-left: 8px;
  color: #404143;
  font-family: "RobotoSlab-Regular";
`;

export const ProviderMetaText = styled.span`
  margin-left: 8px;
  color: #404143;
  font-family: "RobotoSlab-Regular";
`;
