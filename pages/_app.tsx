import { AuthProvider } from "@context/Auth";
import Header from "@components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";
import { NotifyProvider } from "@context/Notification";

function App({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_NOTIFICATIONS_FEATURE_FLAG === "false") {
    return (
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    );
  }

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
