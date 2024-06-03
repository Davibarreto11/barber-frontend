import { createGlobalStyle } from "styled-components";
import createback from "../assets/userback.jpg"
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: url(${createback}) 100% no-repeat;
    background-size: cover;
    color: #FFF;


  }

  body, input-security, button {
    font: 16px Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
