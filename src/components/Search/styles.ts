import {StyleSheet} from 'react-native';
import {Colors} from '@theme/color';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.medium,
    borderRadius: 10,
    height: 60,
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    padding: 10,
  },
  input: {
    height: 60,
    width: '100%',
    paddingLeft: 10,
  },
});
