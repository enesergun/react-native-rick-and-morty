import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Input, Theme, ScrollView } from 'tamagui';

import Title from '~/components/Elements/Title';
import EpisodeList from '~/components/Episodes/episode-list';

export default function TabCharactersScreen() {
  const { left, top, right } = useSafeAreaInsets();

  return (
    <Theme name="light">
      <YStack top={top} left={left} right={right} flex={1} paddingHorizontal={10}>
        <Title text="Episodes" color="#11b0c8" margin={0} />
        <ScrollView marginBottom={60}>
          <Input size="$4" placeholder="Search Episode..." marginTop={10} marginBottom={30} />
          <EpisodeList />
        </ScrollView>
      </YStack>
    </Theme>
  );
}
