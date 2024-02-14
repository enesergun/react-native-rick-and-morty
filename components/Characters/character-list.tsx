import { View } from 'tamagui';

import CharacterCard from './character-card';
export default function CharacterList() {
  return (
    <View flexDirection="row" flexWrap="wrap" gap="10">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </View>
  );
}
