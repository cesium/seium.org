import { createContext } from "react";

export const FeatureFlagsContext = createContext({});

export const FeatureFlagsProvider = ({ children }) => {
  const features = fetchFeatures();

  return (
    <FeatureFlagsContext.Provider value={{ features }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

const fetchFeatures = () => {
  const features = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (key.endsWith("_FEATURE_FLAG")) {
      const featureName = key.replace("_FEATURE_FLAG", "").replace("NEXT_PUBLIC_", "");
      features[featureName] = value === "true";
    }
  }
  return features;
}
