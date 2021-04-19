import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-content: center;
  height: 100vh;
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  div {
    background-color: white;
    padding: 8px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h1 {
    font-size: 24px;
    line-height: 34px;
  }

  button[form='updateItem'] {
    background-color: var(--primary);
    padding: 4px 8px;
    color: white;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  input {
    padding: 4px 8px;
    border: solid 1px var(--primary);
  }

  input + input {
    margin-top: 8px;
  }
`;

export const InputGroup = styled.div`
  display: grid;

  label {
    justify-self: flex-start;
  }
`;
