import { useFeatureFlags } from "./useFeatureFlags";

export const FeatureFlag = ({ feature, children }) => {
    const { features } = useFeatureFlags();

    if (features[feature]) {
        return children;
    }

    return null;
}
