import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigate} from '../../navigation/NavigationServices';
import {CateItemType} from './types';
import {styles} from './Styles/CardStyles';
import FastImage from 'react-native-fast-image';

const Card: React.FC<CateItemType> = ({
  title,
  image,
  coverImage,
  size,
  type,
}) => {
  const handleNavigation = () => {
    if (type === 'category') {
      navigate('Category', {category: image}, title);
    } else {
      navigate('UserProfile', {
        user: {
          title,
          image: image,
          coverImage: coverImage,
        },
      });
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <FastImage
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

export default Card;
