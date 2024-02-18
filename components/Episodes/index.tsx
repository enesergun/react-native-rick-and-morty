import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, YGroup, Separator, ScrollView, XStack } from 'tamagui';

import CharacterEpisodes from '~/components/Characters/character-episodes';
import CharacterImage from '~/components/Characters/character-image';
import DetailElement from '~/components/Elements/DetailElement';
import Title from '~/components/Elements/Title';
import LocationCard from '~/components/Locations/location-card';
export default function EpisodeDetail() {
  const { id } = useLocalSearchParams();
  const { left, top, right } = useSafeAreaInsets();

  return (
    <ScrollView theme="light">
      <YStack top={top} left={left} right={right} flex={1} padding={10}>
        <Link style={styles.linkStyle} href="/episodes">
          <FontAwesome size={28} name="chevron-left" />
        </Link>

        <Title margin={20} text="The Ricklantis Mixup" color="#11b0c8" centered />

        <YGroup separator={<Separator />} theme="light" marginBottom={60}>
          <DetailElement title="Test" subTitle="test2" />
          <DetailElement title="Test" subTitle="test2" />
          <DetailElement title="Test" subTitle="test2" />
          <DetailElement title="Test" subTitle="test2" />
          <DetailElement title="Test" subTitle="test2" />
        </YGroup>
      </YStack>
      <CharacterEpisodes />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  linkStyle: {
    fontSize: 20,
    color: '#11b0c8',
    marginLeft: 15,
  },
});
