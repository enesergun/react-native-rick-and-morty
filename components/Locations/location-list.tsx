import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'tamagui';

import LocationListCard from './location-list-card';

export default function CharacterList() {
  return (
    <View flexDirection="row" flexWrap="wrap" gap={8} marginBottom={60}>
      <Link href="/location/1" style={styles.linkStyle}>
        <LocationListCard />
      </Link>
      <Link href="/location/2" style={styles.linkStyle}>
        <LocationListCard />
      </Link>
      <Link href="/location/3" style={styles.linkStyle}>
        <LocationListCard />
      </Link>
      <Link href="/location/4" style={styles.linkStyle}>
        <LocationListCard />
      </Link>
      <Link href="/location/5" style={styles.linkStyle}>
        <LocationListCard />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  linkStyle: {
    width: '48%',
  },
});
