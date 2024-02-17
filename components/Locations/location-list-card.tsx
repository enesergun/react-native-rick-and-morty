import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Text, View, H4 } from 'tamagui';
export default function CharacterCard() {
  return (
    <View
      padding={15}
      alignItems="center"
      borderRadius={20}
      borderStyle="solid"
      borderWidth={1}
      minWidth={170}
      width="100%">
      <View>
        <Ionicons name="planet-outline" size={42} />
      </View>
      <H4>Earth</H4>
      <View flexDirection="row">
        <Text>Type:</Text>
        <Text>Planet</Text>
      </View>
      <View flexDirection="row">
        <Text>Resident Count:</Text>
        <Text>176</Text>
      </View>
    </View>
  );
}
