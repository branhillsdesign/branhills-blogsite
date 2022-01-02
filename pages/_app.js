import { ThemeProvider } from 'styled-components';
import MDXStyles from '../components/MDXStyles';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/ThemeProvider';
import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXStyles}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
