import {StyleSheet} from 'react-native';
import {Colors} from '@theme/color';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  icons: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  detail: {
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  description: {
    color: Colors.medium,
    fontWeight: 'bold',
  },
});
