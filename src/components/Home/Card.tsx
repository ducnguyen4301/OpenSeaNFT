import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '@theme/color';
import {navigate} from '../../navigation/NavigationServices';
import {CateItemType} from './types';

const Card: React.FC<CateItemType> = ({title, image, size, type}) => {
  const handleNavigation = () => {
    if (type === 'category') {
      navigate('Category', {category: image}, title);
    } else {
      navigate('UserProfile', {user: image}, title);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <Image
        source={{uri: image}}
        style={[
          styles.image,
          {
            width: size,
            height: size,
          },
        ]}
      />
      <Text
        style={
          type === 'category' ? styles.categoryTitle : styles.defaultTitle
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
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

export default Card;
