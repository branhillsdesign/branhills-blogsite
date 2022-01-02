import styled from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;
