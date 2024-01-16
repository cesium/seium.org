import { useContext } from 'react';
import { FeatureFlagsContext } from './FeatureFlagsProvider';

export const useFeatureFlags = () => useContext(FeatureFlagsContext);
