import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from '../components/';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
