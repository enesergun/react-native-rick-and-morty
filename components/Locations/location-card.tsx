import { Link } from 'expo-router';
import { Dimensions } from 'react-native';
import { H3, XStack, Card, Paragraph, Text, View, Image } from 'tamagui';

import { LocationCardProps } from '~/app/definitions';

export default function LocationCard({
  infoText,
  locationName,
  link,
  image,
  color,
}: Readonly<LocationCardProps>) {
  const windowWidth = Dimensions.get('window').width;
  return (
    <Card backgroundColor="#fff" marginTop={20} marginBottom={40} width={windowWidth - 20} elevate>
      <Card.Header padded>
        <Paragraph theme="alt2" color={color}>
          {infoText}
        </Paragraph>
        <H3 color={color}>{locationName}</H3>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Link href={link}>
          <View backgroundColor="#f3f4f6" padding={15} borderRadius={15}>
            <Text>More Detail</Text>
          </View>
        </Link>
      </Card.Footer>
      <Card.Background>
        <Image
          opacity={0.7}
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: 420,
            height: 200,
            uri: image,
          }}
        />
      </Card.Background>
    </Card>
  );
}
