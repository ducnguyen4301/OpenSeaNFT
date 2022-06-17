/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '@theme/color';
import {navigate} from 'navigation/NavigationServices';
import {IconsMCI} from '@assets/icons';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

type UserProfleProps = {
  title: string;
  username: string;
  coverImage: any;
  avatar: any;
  verified: any;
  scrollable: any;
};
const UserProfile: React.FC<UserProfleProps> = ({
  title,
  username,
  coverImage,
  avatar,
  verified,
  scrollable,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: scrollable ? 185 : '48%',
          marginHorizontal: scrollable ? 10 : 0,
        },
      ]}
      onPress={() =>
        navigate('UserProfile', {
          user: {
            title,
            image: avatar,
            coverImage: coverImage,
            verified,
          },
        })
      }>
      <View style={styles.topContainer}>
        <FastImage
          source={{uri: coverImage}}
          style={[
            styles.coverImage,
            {
              width: scrollable ? 185 : '100%',
            },
          ]}
          resizeMode="cover"
        />
      </View>
      <FastImage
        source={{uri: avatar}}
        style={[
          styles.avatar,
          {top: scrollable ? 75 : '38%', left: scrollable ? 70 : '38%'},
        ]}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.usernameDetails}>
          <Text style={styles.title}>{title}</Text>
          {verified && (
            <IconsMCI
              name="check-decagram"
              size={15}
              color={Colors.primary}
              style={styles.icon}
            />
          )}
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;
