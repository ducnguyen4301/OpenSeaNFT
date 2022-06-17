import {Colors} from '@theme/color';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    borderWidth: 1.2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    overflow: 'hidden',
  },
  image: {
    borderWidth: 0.5,
    borderColor: Colors.white,
  },
});
