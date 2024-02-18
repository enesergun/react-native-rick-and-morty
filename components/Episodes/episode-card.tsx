import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, H4 } from 'tamagui';
export default function EpisodeCard() {
  return (
    <View
      padding={15}
      alignItems="center"
      borderRadius={20}
      borderStyle="solid"
      borderWidth={1}
      minWidth={170}
      width="100%">
      <View alignSelf="flex-end" marginBottom={10}>
        <Text fontSize={11}>S03E07</Text>
      </View>
      <View>
        <MaterialCommunityIcons name="television-classic" size={42} marginBottom={10} />
      </View>
      <H4>The Ricklantis</H4>
      <View flexDirection="row" marginBottom={10}>
        <Text>September 10, 2017</Text>
      </View>
    </View>
  );
}
