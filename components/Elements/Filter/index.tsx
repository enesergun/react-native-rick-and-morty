import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams, router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Input, Button, View, Sheet, Text, ScrollView, XStack } from 'tamagui';

import { FilterProps } from '~/app/definitions';

function FilterGroup() {
  const [active, setActive] = useState('');
  return (
    <View padding={15}>
      <Text marginBottom={10}>Status</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack gap={15}>
          <Button
            borderWidth={1}
            borderColor="#d1d5db"
            borderRadius={15}
            backgroundColor={active === 'alive' ? '#11b0c8' : 'transparent'}
            color={active === 'alive' ? '#fff' : '#000'}
            onPress={() => {
              setActive((prevState) => (prevState === 'alive' ? '' : 'alive'));
              router.setParams({ status: active === 'alive' ? '' : 'alive' });
            }}>
            Alive
          </Button>
          <Button
            borderWidth={1}
            borderColor="#d1d5db"
            borderRadius={15}
            backgroundColor={active === 'dead' ? '#11b0c8' : 'transparent'}
            color={active === 'dead' ? '#fff' : '#000'}
            onPress={() => {
              setActive((prevState) => (prevState === 'dead' ? '' : 'dead'));
              router.setParams({ status: active === 'dead' ? '' : 'dead' });
            }}>
            Dead
          </Button>
          <Button
            borderWidth={1}
            borderColor="#d1d5db"
            borderRadius={15}
            backgroundColor={active === 'unknown' ? '#11b0c8' : 'transparent'}
            color={active === 'unknown' ? '#fff' : '#000'}
            onPress={() => {
              setActive((prevState) => (prevState === 'unknown' ? '' : 'unknown'));
              router.setParams({ status: active === 'unknown' ? '' : 'unknown' });
            }}>
            Unknown
          </Button>
        </XStack>
      </ScrollView>
    </View>
  );
}

export default function Filter({ placeholder }: Readonly<FilterProps>) {
  const [position, setPosition] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);

  const snapPoints = [40, 50];

  return (
    <View flexDirection="row" alignItems="center" marginTop={10} marginBottom={30} gap={6}>
      <Input
        value={searchText}
        size="$4"
        placeholder={placeholder}
        width="80%"
        onChangeText={(search) => {
          router.setParams({ q: search });
          setSearchText(search);
        }}
      />
      <Button
        onPress={() => setOpen(true)}
        borderColor="#d1d5db"
        borderWidth={1}
        borderStyle="solid"
        icon={<FontAwesome name="filter" size={32} color="#11b0c8" />}
      />
      <Sheet
        forceRemoveScrollEnabled={open}
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        snapPointsMode="percent"
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}>
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle />
        <Sheet.Frame padding={20}>
          <FilterGroup />
          <FilterGroup />
          <Button backgroundColor="#11b0c8" color="#fff" onPress={() => setOpen(false)}>
            Apply Filter
          </Button>
        </Sheet.Frame>
      </Sheet>
    </View>
  );
}
