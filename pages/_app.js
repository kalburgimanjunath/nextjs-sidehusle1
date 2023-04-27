import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Sidebar } from '../components/';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: 20 }}>
          <Component {...pageProps} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
