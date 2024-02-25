import { useLocalSearchParams } from 'expo-router';
import React, { useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, YGroup, Separator, ScrollView } from 'tamagui';

import DynamicHeader from '../dynamicHeader';

import CharacterEpisodes from '~/components/Characters/character-episodes';
import DetailElement from '~/components/Elements/DetailElement';
export default function LocationDetail() {
  const { id } = useLocalSearchParams();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <YStack>
        <DynamicHeader animHeaderValue={scrollOffsetY} title="Earth" back="/locations" />
        <ScrollView
          theme="light"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
            useNativeDriver: false,
          })}>
          <YStack padding={10}>
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
