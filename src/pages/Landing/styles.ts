import styled, { keyframes } from "styled-components";
import { border, shade } from "polished";
import LandingBackground from "../../assets/intro/fundo2.png";
import LandingImg from "../../assets/landing.jpg";



export const Container = styled.div`
  height: 100vh;
  display: flex;

  justify-content: space-between  ;
  gap: 3rem;
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





export const TextIntro = styled.div`
 h1 {
    display: flex;
    color: #3d3f41;
    font-size: 90px;
    font-weight: 800;
    text-decoration: bold;
    width: 201%;  /* Definindo a largura para 100% */
    padding-bottom: 2rem;
    flex-wrap: wrap;  /* Permite quebra de linha no flex */
    word-break: break-word;  /* Quebra de palavras longas */
  }

  p {
    font-size: 20px;
    width: 200%;  /* Definindo a largura para 100% */
    color: #3d3f41;
  }

width: 50%;
margin-bottom:2rem;


  @media (max-width: 1368px) {


margin-right: 5rem;
h1 {
  font-size: 50px;
  width:150%;
}

p {
  font-size: 14px;
  width: 90%;

}
}

@media (max-width: 480px) {
h1 {
  font-size: 40px;
}

p {
  font-size: 16px;
}
}
`;

export const ButtonRow = styled.div`
margin-left: 10%;

h1{
  padding: 15px 30px 15px 30px;
}
  width: 20rem;
  display: flex;
  font-size: 1.5rem;
  color: #38ada9;

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
