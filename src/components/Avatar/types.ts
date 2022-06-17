import {StyleProp, ViewStyle} from 'react-native';

export interface AvatarProps {
  image?: any;
  size?: number;
  isOnline?: boolean;
  isCircle?: boolean;
  ImageStyle?: StyleProp<ViewStyle>;
}
