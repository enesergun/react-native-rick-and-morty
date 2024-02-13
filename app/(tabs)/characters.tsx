import { YStack, XStack, H2, Input, Theme, Button } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import EditScreenInfo from '../../components/edit-screen-info';

export default function TabCharactersScreen() {
  const { left, top, right } = useSafeAreaInsets();
  return (
    <Theme name="light">
      <YStack top={top} left={left} right={right}>
        <H2 color="#11b0c8">Characters</H2>
        <Input  size="$4" placeholder={`Search Character...`} />
      </YStack>
    </Theme>
  );
}
