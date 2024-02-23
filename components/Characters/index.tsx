import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useState, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, YGroup, Separator, ScrollView, XStack } from 'tamagui';

import CharacterEpisodes from '~/components/Characters/character-episodes';
import CharacterImage from '~/components/Characters/character-image';
import DetailElement from '~/components/Elements/DetailElement';
import Title from '~/components/Elements/Title';
import LocationCard from '~/components/Locations/location-card';
import DynamicHeader from '../dynamicHeader';
export default function CharacterDetail() {
  const { id } = useLocalSearchParams();
  const { left, top, right } = useSafeAreaInsets();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <YStack>
        <DynamicHeader animHeaderValue={scrollOffsetY} />
        <ScrollView
          theme="light"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
            useNativeDriver: false,
          })}>
          <YStack padding={10}>
            <YGroup separator={<Separator />} theme="light">
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
              <DetailElement title="Test" subTitle="test2" />
            </YGroup>
            <LocationCard
              infoText="Location"
              locationName="Earth"
              image={require('../../assets/planet.webp')}
              link="/location/2"
              color="#11b0c8"
            />
            <LocationCard
              infoText="Location"
              locationName="Earth"
              image={require('../../assets/planet.webp')}
              link="/location/2"
              color="#11b0c8"
            />
          </YStack>
          <CharacterEpisodes />
          <CharacterEpisodes />
        </ScrollView>
      </YStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0,
  },
  linkStyle: {
    fontSize: 20,
    color: '#11b0c8',
    marginLeft: 15,
  },
});
