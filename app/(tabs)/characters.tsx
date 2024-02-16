import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, H2, Input, Theme, Image, Text, View, XGroup, ScrollView } from 'tamagui';

import CharacterCard from '~/components/Characters/character-card';
import CharacterList from '~/components/Characters/character-list';

export default function TabCharactersScreen() {
  const { left, top, right } = useSafeAreaInsets();

  return (
    <Theme name="light">
      <YStack top={top} left={left} right={right} flex={1} padding={10}>
        <H2 color="#11b0c8">Characters</H2>
        <ScrollView>
          <Input size="$4" placeholder="Search Character..." marginTop={10} marginBottom={30} />
          <CharacterList />
        </ScrollView>
      </YStack>
    </Theme>
  );
}
