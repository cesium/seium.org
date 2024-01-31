import { AuthProvider } from "@context/Auth";
import Header from "@components/Header";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
