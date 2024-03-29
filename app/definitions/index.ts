import { Animated } from 'react-native';

export interface TitleProps {
  style?: any;
  margin: number;
  text: string;
  color: string;
  centered?: boolean;
}
export interface DetailElementProps {
  title: string;
  subTitle: string;
}
export interface CharacterImageProps {
  image: string;
}
export interface LocationCardProps {
  color: string;
  infoText: string;
  locationName: string;
  link: any;
  image?: any;
}
export interface FilterProps {
  placeholder: string;
}
export interface DynamicHeaderProps {
  animHeaderValue: Animated.Value;
  image?: string | NodeRequire;
  title: string;
  back: any;
}
