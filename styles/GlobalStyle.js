import { createGlobalStyle } from 'styled-components';
import theme from './ThemeProvider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => theme.background};
    color: ${props => theme.text};
  }
  h1 {
    font-size: 4rem;
  }
`;
export default GlobalStyle;
