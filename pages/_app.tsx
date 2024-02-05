import { AuthProvider } from "@context/Auth";
import Header from "@components/Header";

import "../styles/globals.css";
import { NotifyProvider } from "@context/Notification";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NotifyProvider>
        <Header />
        <Component {...pageProps} />
      </NotifyProvider>
    </AuthProvider>
  );
}

export default App;
