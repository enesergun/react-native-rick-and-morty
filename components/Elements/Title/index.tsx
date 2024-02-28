import { Animated, StyleSheet } from 'react-native';
import { H2 } from 'tamagui';

import { TitleProps } from '~/app/definitions';
export default function Title({
  style,
  margin,
  text,
  color,
  centered = false,
}: Readonly<TitleProps>) {
  if (style) {
    return (
      <Animated.Text
        style={[
          {
            margin,
            fontSize: 30,
            textAlign: 'center',
            position: 'relative',
          },
          style,
        ]}>
        {text}
      </Animated.Text>
    );
  } else {
    return (
      <H2 margin={margin} textAlign={centered ? 'center' : 'auto'} color={color}>
        {text}
      </H2>
    );
  }
}

const styles = StyleSheet.create({});
