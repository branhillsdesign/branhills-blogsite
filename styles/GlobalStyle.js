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
  pre {
    background-color: #000000;
    padding: 3rem;
    border-radius: 1rem;
    overflow-x: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
export default GlobalStyle;
