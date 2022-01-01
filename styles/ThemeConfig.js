import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #fff;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",Oxygen";
  }
`;
export default GlobalStyle;

// New Theme Information
// export const lightTheme = {
//   body: '#ffffff',
//   text: '#363537',
//   toggleBorder: '#ffffff',
//   background: '#363537',
// };

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   background: '#999',
// };

// export const GlobalStyle = createGlobalStyle`
//   body {
//     background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//     font-family: '-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;'
//     transition: all .50s linear;
//   }
// `;
