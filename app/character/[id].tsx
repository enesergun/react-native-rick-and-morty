import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import CharacterDetail from '~/components/Characters';
export default function Detail() {
  const { id } = useLocalSearchParams();

  return <CharacterDetail />;
}
