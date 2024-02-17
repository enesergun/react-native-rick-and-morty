import React from 'react';
import { ScrollView, XStack } from 'tamagui';

import LocationCard from '~/components/Locations/location-card';

export default function CharacterEpisodes() {
  return (
    <ScrollView horizontal marginLeft={10} marginRight={10}>
      <XStack flex={1} gap={5}>
        <LocationCard
          infoText="Episode"
          locationName="Episode 1"
          image={require('../../assets/planet.webp')}
          link="/location/2"
        />
        <LocationCard
          infoText="Episode"
          locationName="Episode 1"
          image={require('../../assets/planet.webp')}
          link="/location/2"
        />
        <LocationCard
          infoText="Episode"
          locationName="Episode 1"
          image={require('../../assets/planet.webp')}
          link="/location/2"
        />
        <LocationCard
          infoText="Episode"
          locationName="Episode 1"
          image={require('../../assets/planet.webp')}
          link="/location/2"
        />
      </XStack>
    </ScrollView>
  );
}
