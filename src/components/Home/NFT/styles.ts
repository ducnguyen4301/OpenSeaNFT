import {StyleSheet} from 'react-native';
import {Colors} from '@theme/color';
export default StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 0.5,
    borderColor: Colors.medium,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 155,
    borderRadius: 10,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 15,
    color: 'gray',
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.gray,
    marginLeft: 7,
  },
});
