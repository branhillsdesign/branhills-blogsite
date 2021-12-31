import { MDXProvider } from '@mdx-js/react';
import MDXStyles from '../components/MDXStyles/MDXStyles';
import { Container } from '../components/Container';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MDXProvider components={MDXStyles}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    </>
  );
}

export default MyApp;
