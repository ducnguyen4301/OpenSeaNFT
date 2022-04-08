import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {IconsMCI} from '@assets/icons';
import {useTheme} from '@theme';
import styles from './styles';

interface SocialNetworkProps {
  name: string;
  icon: any;
  color: string;
}
const SocialNetwork: React.FC<SocialNetworkProps> = ({name, icon, color}) => {
  const {Colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.socialNetwork,
        {
          backgroundColor: color,
        },
      ]}>
      <View style={styles.content}>
        <IconsMCI name={icon} size={30} color={Colors.white} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialNetwork;
