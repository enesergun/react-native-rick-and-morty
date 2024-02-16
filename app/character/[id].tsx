import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Image, Avatar } from 'tamagui';

export default function CharacterDetail() {
  const { id } = useLocalSearchParams();
  const { left, top, right } = useSafeAreaInsets();

  return (
    <YStack top={top} left={left} right={right} flex={1} padding={10}>
      <Link style={styles.linkStyle} href="/characters">
        {'<'}
      </Link>

      <Avatar size="$20" alignSelf="center" marginTop={10}>
        <Avatar.Image src={require('../../assets/1.webp')} borderRadius={10} />
        <Avatar.Fallback bc="red" />
      </Avatar>
    </YStack>
  );
}
const styles = StyleSheet.create({
  linkStyle: {
    fontSize: 20,
    color: '#11b0c8',
  },
});
