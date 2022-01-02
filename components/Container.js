import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;
