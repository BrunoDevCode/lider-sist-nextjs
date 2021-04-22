import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  align-content: center;
  height: 100vh;
  text-align: center;

  div {
    box-shadow: 2px 2px 12px -4px #3d3d3c;
    width: 100%;
    max-height: 350px;
    height: 100%;
    max-width: 400px;
    background-color: white;
    padding: 4px;
    border-radius: 4px;

    h1 {
      font-size: 28px;
      line-height: 38px;
      font-weight: 900;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 8px;
  width: 100%;
  margin-top: 24px;

  input {
    font-size: 18px;
    padding: 4px 8px;
    background-color: #ededed;
  }

  input + input {
    margin-top: 8px;
  }

  button {
    background-color: #3f88c5;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 16px;
    font-size: 16px;
  }
`;
