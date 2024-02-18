import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import EpisodeDetail from '~/components/Episodes';

export default function Detail() {
  const { id } = useLocalSearchParams();

  return <EpisodeDetail />;
}
