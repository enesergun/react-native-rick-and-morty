import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import LocationDetail from '~/components/Locations';

export default function Detail() {
  const { id } = useLocalSearchParams();

  return <LocationDetail />;
}
