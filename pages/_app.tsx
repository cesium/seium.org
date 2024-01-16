import { AuthProvider } from "@context/Auth";
import Header from "@components/Header";

import { FeatureFlagsProvider } from "@context/FeatureFlags/FeatureFlagsProvider";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <FeatureFlagsProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </FeatureFlagsProvider>
  );
}

export default App;
