/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {IconsMCI} from '@assets/icons';
import Avatar from '../Avatar';
interface StatsProps {
  order: number;
  image: any;
  username: string;
  price: number;
  type: string;
}

const Stats: React.FC<StatsProps> = ({order, image, username, price, type}) => {
  return (
    <View style={styles.container}>
      {type === 'rankings' && <Text style={styles.order}>{order}</Text>}
      <View style={styles.details}>
        <Avatar image={image} size={50} circle={type === 'rankings'} online />
        <View style={styles.userDetails}>
          <Text style={styles.username}>{username}</Text>
          <TouchableOpacity style={styles.more}>
            <Text style={styles.moreText}>+ More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.priceDetails}>
        {type === 'rankings' && <IconsMCI name="ethereum" size={18} />}
        <Text
          style={[
            styles.price,
            {
              textAlign: type === 'activity' ? 'right' : 'left',
            },
          ]}>
          {type === 'rankings' ? price : 'Sale'}
        </Text>
        {type === 'activity' && <Text style={styles.time}>21 seconds ago</Text>}
      </View>
    </View>
  );
};

export default Stats;
