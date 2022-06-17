import React from 'react';
import {View, Image} from 'react-native';

import {IconsMCI} from '@assets/icons';
import styles from './styles';
import {AvatarProps} from './types';
import {useTheme} from '@theme';

const Avatar: React.FC<AvatarProps> = ({
  image,
  size = 50,
  isOnline,
  isCircle,
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
      {isCircle && isOnline && (
        <IconsMCI
          style={[
            styles.icon,
            {
              left: size * 0.75,
              top: size * 0.02,
            },
          ]}
          name="circle"
          size={15}
          color={Colors.online}
        />
      )}
      <Image
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
