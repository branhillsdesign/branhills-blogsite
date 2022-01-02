import { createGlobalStyle } from 'styled-components';
import theme from './ThemeProvider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => theme.colors.background};
    color: ${(props) => theme.colors.text};
    width: ${(props) => theme.breakpoints.xs};
  }
`;
export default GlobalStyle;
