import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #1C3144;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }
  
  html, body #__next{
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #F0F0F5;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }

  input {
    width: 100%;
    font-size: 18px;
  }

  button {
    display: block;
    background: none;
    cursor: pointer;
  }
`;

export const Alert = styled.i`
  z-index: 99;
  position: absolute;
  top: 16px;
  right: 30%;
  left: 30%;
  background-color: #bd1708;
  color: white;
  padding: 4px;
  font-weight: 900;
`;
