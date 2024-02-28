import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'tamagui';

import EpisodeCard from './episode-card';
export default function EpisodeList() {
  return (
    <View flexDirection="row" flexWrap="wrap" gap={8} marginBottom={60}>
      <Link href="/episode/1" style={styles.linkStyle}>
        <EpisodeCard />
      </Link>
      <Link href="/episode/2" style={styles.linkStyle}>
        <EpisodeCard />
      </Link>
      <Link href="/episode/3" style={styles.linkStyle}>
        <EpisodeCard />
      </Link>
      <Link href="/episode/4" style={styles.linkStyle}>
        <EpisodeCard />
      </Link>
      <Link href="/episode/5" style={styles.linkStyle}>
        <EpisodeCard />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  linkStyle: {
    width: '48%',
  },
});
