import { Link } from 'expo-router';
import { View, styled } from 'tamagui';

import CharacterCard from './character-card';

export default function CharacterList() {
  return (
    <View flexDirection="row" flexWrap="wrap" gap={8}>
      <Link href="/character/1" className="link">
        <CharacterCard />
      </Link>
      <Link href="/character/2">
        <CharacterCard />
      </Link>
      <Link href="/character/3">
        <CharacterCard />
      </Link>
      <Link href="/character/4">
        <CharacterCard />
      </Link>
      <Link href="/character/5">
        <CharacterCard />
      </Link>
    </View>
  );
}
