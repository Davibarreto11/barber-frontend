import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #1c1b22;

  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
        transition: color 0.3s;

        &:hover {
          color: ${shade(0.2, "#999591")};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -170px auto 0;
  padding: 20px;
  width: 100%;
  max-width: 600px;

  form {
    margin: 50px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 24px;
      text-align: left;
      margin-bottom: 20px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 20px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 70px;
  position: relative;
  width: 180px;
  align-self: center;

  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #38ada9;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s, transform 0.3s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, "#312e38")};
      }
    }

    &:hover {
      background: ${shade(0.2, "#38ada9")};
      transform: scale(1.1);
    }
  }
`;
