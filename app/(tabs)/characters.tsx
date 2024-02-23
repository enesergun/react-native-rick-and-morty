import { useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Theme, ScrollView } from 'tamagui';

import CharacterList from '~/components/Characters/character-list';
import Filter from '~/components/Elements/Filter';
import Title from '~/components/Elements/Title';
export default function TabCharactersScreen() {
  const params = useLocalSearchParams<{ q?: string; status?: string }>();
  const { left, top, right } = useSafeAreaInsets();

  return (
    <Theme name="light">
      <YStack top={top} left={left} right={right} flex={1} padding={10}>
        <Title text="Characters" color="#11b0c8" margin={0} />
        <ScrollView marginBottom={60}>
          <Filter placeholder="Search Character..." />

          <CharacterList />
        </ScrollView>
      </YStack>
    </Theme>
  );
}
