import {Colors} from '@theme/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.light,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
