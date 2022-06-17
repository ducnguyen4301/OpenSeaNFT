import {Colors} from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  image: {
    borderRadius: 20,
  },
  defaultTitle: {
    color: Colors.black,
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 10,
    marginLeft: 5,
  },
  categoryTitle: {
    position: 'absolute',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    width: 100,
    bottom: 20,
    left: 20,
  },
});
