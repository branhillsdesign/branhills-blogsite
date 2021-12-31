import { MDXProvider } from '@mdx-js/react';
import MDXStyles from '../components/MDXStyles/MDXStyles';
import { Container } from '../components/Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container>
        <MDXProvider components={MDXStyles}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    </>
  );
}

export default MyApp;
