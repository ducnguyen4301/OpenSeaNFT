import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconsMCI} from '@assets/icons';
import styles from './styles';
import {Colors} from '@theme/color';

interface ItemProps {
  title?: string;
  onPress?: () => void;
}
const Item: React.FC<ItemProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} {...{onPress}}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerIcon}>
          <View style={styles.viewIcon}>
            <IconsMCI size={30} name="chevron-right" color={Colors.grey} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
