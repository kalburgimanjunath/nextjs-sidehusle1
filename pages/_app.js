import '../styles/globals.css';
import { Header, Footer } from '../components/';
import { useEarthoOne } from '@eartho/one-client-react';
function MyApp({ Component, pageProps }) {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isConnected) {
    return (
      <div>
        Hello {user.displayName}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <button
        className="btn btn-outline-success"
        id="login"
        onClick={() => connectWithPopup({ access_id: 'wAXNIrrIkProRJubXNta' })}
      >
        Log in
      </button>
    );
  }

  return (
    <>
      <Header />
      <EarthoOneProvider clientId="F82I0MnkpHyTHggIUkPK">
        <Component {...pageProps} />
      </EarthoOneProvider>
      <Footer />
    </>
  );
}

export default MyApp;
