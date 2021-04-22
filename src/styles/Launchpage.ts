import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  max-width: 940px;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }
`;

export const A = styled.a`
  background-color: var(--primary);
  color: white;
  padding: 4px;
  border-radius: 4px;
`;

export const List = styled.ul`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 210px;
  grid-gap: 16px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  /* margin: 24px auto; */

  input {
    font-size: 16px;
    line-height: 28px;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 2px 2px 8px -2px rgba(5, 5, 8, 0.6);
    border: 1px solid transparent;
  }

  input:focus {
    border-color: var(--primary);
  }
`;
