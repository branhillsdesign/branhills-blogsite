import { Container } from '../components/Container';
import GlobalStyle, { darkTheme, lightTheme } from '../styles/ThemeConfig';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
