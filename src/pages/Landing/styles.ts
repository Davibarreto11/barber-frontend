import styled, { keyframes } from "styled-components";
import { border, shade } from "polished";
import LandingBackground from "../../assets/intro/fundo2.png";
import LandingImg from "../../assets/landing.jpg";



export const Container = styled.div`
  height: 100vh;
  display: flex;
  /* align-items: stretch; */
  justify-content: space-between  ;
  position: relative;
  background: url(${LandingBackground}) no-repeat ;
  background-size: cover;
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 180px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #38ada9;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#38ada9")};
    }
  }
`;

export const Backgroud = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
  width: 35%;
  height: 70%;
  background: url(${LandingImg}) no-repeat center;
  background-size: cover;
  border-radius: 300px 200px 0px 300px;
`;


export const TextIntro = styled.div`
  h1{
    color: #3d3f41;
    font-size: 90px;
    font-weight: 800;
    text-decoration: bold;
    width: 900px;
    padding-bottom: 2rem;
  }
  p{
    font-size: 20px;
    width: 650px;
    color:#3d3f41;
    }

width: 400px;
margin-bottom:2rem;

`;

export const ButtonRow = styled.div`

h1{
  padding: 15px 30px 15px 30px;
}
  width: 20rem;
  display: flex;
  font-size: 1.5rem;
  color: #38ada9;

`;
