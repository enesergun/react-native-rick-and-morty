import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'tamagui';

import CharacterCard from './character-card';

export default function CharacterList() {
  return (
    <View flexDirection="row" flexWrap="wrap" gap={8}>
      <Link href="/character/1" style={styles.linkStyle}>
        <CharacterCard />
      </Link>
      <Link href="/character/2" style={styles.linkStyle}>
        <CharacterCard />
      </Link>
      <Link href="/character/3" style={styles.linkStyle}>
        <CharacterCard />
      </Link>
      <Link href="/character/4" style={styles.linkStyle}>
        <CharacterCard />
      </Link>
      <Link href="/character/5" style={styles.linkStyle}>
        <CharacterCard />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  linkStyle: {
    height: 270,
  },
});
