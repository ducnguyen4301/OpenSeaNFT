import {DefaultTheme} from '@react-navigation/native';
import {Colors} from './color';
import {Fonts} from './fonts';

export const useTheme = () => {
  return {
    Colors,
    Fonts,
    NavigationTheme: {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        ...Colors,
      },
    },
  };
};
