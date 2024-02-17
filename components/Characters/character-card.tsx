import { Image, Text, View } from 'tamagui';
export default function CharacterCard() {
  return (
    <View padding={15} borderRadius={20} borderStyle="solid" borderWidth={1} width="48%">
      <Image
        borderRadius={20}
        source={{
          uri: require('../../assets/1.webp'),
          width: 150,
          height: 150,
        }}
      />

      <Text marginTop={10} fontSize={15}>
        Rick Sanchez
      </Text>
      <View marginTop={10} gap={2}>
        <Text>Alive</Text>
        <Text>Human</Text>
      </View>
    </View>
  );
}
