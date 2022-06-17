import React from 'react';
import {View} from 'react-native';

import {IconsMCI} from '@assets/icons';
import styles from './styles';
import {AvatarProps} from './types';
import {useTheme} from '@theme';
import FastImage from 'react-native-fast-image';

const Avatar: React.FC<AvatarProps> = ({
  image,
  size = 50,
  isOnline,
  isCircle,
  isVerify,
  ImageStyle,
}) => {
  const {Colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
        ImageStyle,
      ]}>
      {isCircle && isOnline && isVerify && (
        <>
          <IconsMCI
            style={[
              styles.icon,
              {
                left: size * 0.68,
                top: size * 0.02,
              },
            ]}
            name="circle"
            size={12}
            color={Colors.online}
          />
          <IconsMCI
            style={[
              styles.icon,
              {
                left: size * 0.68,
                bottom: size * 0.02,
              },
            ]}
            name="check-decagram"
            size={17}
            color={Colors.primary}
          />
        </>
      )}
      <FastImage
        source={{uri: image}}
        style={[
          styles.image,
          {
            width: size,
            height: size,
            borderRadius: isCircle ? size / 2 : size / 5,
          },
        ]}
      />
    </View>
  );
};

export default Avatar;
