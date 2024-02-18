import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Input, Theme, ScrollView } from 'tamagui';

import CharacterList from '~/components/Characters/character-list';
import Title from '~/components/Elements/Title';

export default function TabCharactersScreen() {
  const { left, top, right } = useSafeAreaInsets();

  return (
    <Theme name="light">
      <YStack top={top} left={left} right={right} flex={1} padding={10}>
        <Title text="Characters" color="#11b0c8" margin={0} />
        <ScrollView marginBottom={60}>
          <Input size="$4" placeholder="Search Character..." marginTop={10} marginBottom={30} />
          <CharacterList />
        </ScrollView>
      </YStack>
    </Theme>
  );
}
