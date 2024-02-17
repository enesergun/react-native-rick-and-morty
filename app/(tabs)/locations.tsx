import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Input, Theme, ScrollView } from 'tamagui';

import Title from '~/components/Elements/Title';
import LocationList from '~/components/Locations/location-list';
export default function TabCharactersScreen() {
  const { left, top, right } = useSafeAreaInsets();

  return (
    <Theme name="light">
      <YStack top={top} left={left} right={right} flex={1} padding={10}>
        <Title text="Locations" color="#11b0c8" margin={0} />
        <ScrollView>
          <Input size="$4" placeholder="Search Location..." marginTop={10} marginBottom={30} />
          <LocationList />
        </ScrollView>
      </YStack>
    </Theme>
  );
}
