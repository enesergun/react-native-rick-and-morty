import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Input, Button, View } from 'tamagui';

import { FilterProps } from '~/app/definitions';

export default function Filter({ placeholder }: Readonly<FilterProps>) {
  return (
    <View flexDirection="row" alignItems="center" marginTop={10} marginBottom={30} gap={6}>
      <Input size="$4" placeholder={placeholder} width="80%" />
      <Button
        borderColor="#d1d5db"
        borderWidth={1}
        borderStyle="solid"
        icon={<FontAwesome name="filter" size={32} color="#11b0c8" />}
      />
    </View>
  );
}
