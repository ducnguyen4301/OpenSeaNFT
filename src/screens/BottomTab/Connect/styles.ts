import {StyleSheet} from 'react-native';
import {Colors} from '@theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  top: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    width: '90%',
    fontWeight: 'bold',
    color: Colors.grey,
    letterSpacing: 1,
  },
  middle: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.medium,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  buttonTitle: {
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 16,
  },
  bottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    color: Colors.grey,
    fontWeight: 'bold',
  },
  learnMore: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
