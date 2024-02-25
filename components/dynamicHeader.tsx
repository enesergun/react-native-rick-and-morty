import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Animated } from 'react-native';

import { DynamicHeaderProps } from '~/app/definitions';
import Title from '~/components/Elements/Title';

export default function DynamicHeader({
  animHeaderValue,
  image,
  title,
  back,
}: Readonly<DynamicHeaderProps>) {
  const Header_Max_Height = image ? 345 : 100;
  const Header_Min_Height = 50;
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['transparent', '#11b0c8'],
    extrapolate: 'clamp',
  });
  const animatedTextColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['#11b0c8', '#fff'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });
  const animatedHeaderBottom = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [0, 30],
    extrapolate: 'clamp',
  });
  const animateImageHeight = animHeaderValue.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}>
      <Animated.Text style={[styles.linkStyle, { color: animatedTextColor }]}>
        <Link href={back}>
          <FontAwesome size={28} name="chevron-left" />
        </Link>
      </Animated.Text>
      {image && (
        <Animated.Image
          source={require('../assets/1.webp')}
          style={[styles.image, { height: animateImageHeight }]}
        />
      )}
      <Title
        style={{ color: animatedTextColor, bottom: animatedHeaderBottom }}
        margin={10}
        text={title}
        color="#11b0c8"
        centered
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    left: 0,
    right: 0,

    overflow: 'hidden',
  },
  linkStyle: {
    fontSize: 20,
    color: '#11b0c8',
    position: 'relative',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 15,
  },
});
