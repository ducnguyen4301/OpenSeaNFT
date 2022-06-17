import {StyleSheet} from 'react-native';
import {Colors} from '@theme/color';
export default StyleSheet.create({
  container: {
    paddingVertical: 45,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    borderBottomColor: Colors.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  order: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  details: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userDetails: {
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: 'bold',
    width: 200,
    marginBottom: 20,
    marginLeft: 15,
  },
  more: {
    marginLeft: 15,
  },
  moreText: {
    color: Colors.grey,
    fontWeight: 'bold',
  },
  priceDetails: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
  },
  saleDetails: {
    textAlign: 'right',
  },
  time: {
    color: Colors.grey,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
