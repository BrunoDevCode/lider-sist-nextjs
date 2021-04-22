import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  padding: 4px;
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 2px 2px 16px -2px black;
  height: 200px;
  grid-gap: 2px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  button {
    font-size: 14px;
  }

  a {
    background-color: var(--primary);
    color: white;
    padding: 4px;
    text-transform: uppercase;
    border-radius: 4px;
  }

  a:hover {
    background-color: #4a83b5;
  }
`;
