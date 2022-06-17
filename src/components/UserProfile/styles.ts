import {Colors} from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 20,
    shadowColor: Colors.medium,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.41,
    elevation: 3,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topContainer: {
    flex: 1,
  },
  coverImage: {
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatar: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: Colors.white,
    top: 75,
    left: 70,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameDetails: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 5,
  },
  username: {
    color: Colors.primary,
  },
});
