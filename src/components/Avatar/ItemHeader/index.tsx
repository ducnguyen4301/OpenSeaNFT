/* eslint-disable react-native/no-inline-styles */
import {IconsIC, IconsMCI} from '@assets/icons';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Colors} from '@theme/color';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Avatar from '../index';

interface ItemHeaderProps {
  title: string;
  image: any;
  coverImage: any;
  verified: boolean;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({
  title,
  image,
  coverImage,
  verified,
}) => {
  const popAction = StackActions.pop();
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          style={[styles.icon, {left: 20}]}
          onPress={() => navigation.dispatch(popAction)}>
          <IconsMCI name="chevron-left" size={30} color={Colors.grey} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icon, {right: 20}]}>
          <IconsMCI name="filter-variant" size={30} color={Colors.grey} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icon, {bottom: 20, right: 20}]}>
          <IconsIC name="share-social-outline" size={30} color={Colors.grey} />
        </TouchableOpacity>
        <FastImage
          source={{uri: coverImage ? coverImage : image}}
          style={styles.image}
          resizeMode="cover"
        />
        <Avatar ImageStyle={styles.avatar} image={image} size={100} isCircle />
      </View>
      <View style={styles.details}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {verified && (
            <IconsMCI
              name="check-decagram"
              size={20}
              color={Colors.primary}
              style={styles.verifiedIcon}
            />
          )}
        </View>
        <Text style={styles.description}>
          Dolor proident est duis esse ea ullamco cupidatat anim laboris
          consequat occaecat anim id laborum aute dolor in.
        </Text>
        <TouchableOpacity style={styles.more}>
          <Text style={styles.moreText}>+ more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  icon: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: Colors.white,
    borderRadius: 25,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  avatar: {
    position: 'absolute',
    bottom: 5,
    left: 30,
  },
  details: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  verifiedIcon: {
    marginLeft: 10,
  },
  description: {
    color: Colors.medium,
    fontWeight: 'bold',
  },
  more: {
    marginTop: 10,
  },
  moreText: {
    fontWeight: 'bold',
    color: Colors.grey,
  },
});

export default ItemHeader;
