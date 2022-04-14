import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IconsMCI} from '@assets/icons';
import styles from './styles';
import {Colors} from '@theme/color';

import {navigate} from 'navigation/NavigationServices';

interface NFTCardProps {
  user: {username: any; verified: any};
  title: string;
  price: any;
  likes: any;
  image: any;
  scrollable: any;
}

const NFTCard: React.FC<NFTCardProps> = ({
  user,
  title,
  price,
  likes,
  image,
  scrollable,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          width: scrollable ? 185 : '47%',
          marginHorizontal: scrollable ? 10 : 0,
        },
      ]}
      onPress={() =>
        navigate('NFTDetails', {
          nft: {user, title, likes, image, price},
        })
      }>
      <View style={styles.image}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View>
        <View style={styles.userDetails}>
          <Text style={styles.username}>{user.username}</Text>
          {user.verified && (
            <IconsMCI
              name="check-decagram"
              size={18}
              color={Colors.primary}
              style={styles.icon}
            />
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.bottom}>
          <View style={styles.priceContainer}>
            <IconsMCI name="ethereum" size={20} />
            <Text style={styles.price}>{price}</Text>
          </View>
          <View style={styles.likesContainer}>
            <IconsMCI name="heart-outline" color={Colors.medium} size={20} />
            <Text style={styles.likes}>{likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NFTCard;
