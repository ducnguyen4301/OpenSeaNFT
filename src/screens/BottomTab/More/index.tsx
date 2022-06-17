import Header from '@components/Header';
import NonScoll from '@components/NonScroll';
import Social from '@components/More/Socical';
import {Colors} from '@theme/color';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import Item from '@components/More/Item';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const More = () => {
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Header title="More" />
        <Item title={'About'} />
        <Item title={'Blog'} />
        <Item title={'Help Center'} />
        <Text style={styles.sectionTitle}>Follow us</Text>
        <NonScoll data={socialNetworks} DataComponent={Social} />
      </ScrollView>
    </SafeAreaView>
  );
};
const socialNetworks = [
  {
    name: 'Twitter',
    icon: 'twitter',
    color: Colors.primary,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    color: Colors.purple,
  },
  {
    name: 'Discord',
    icon: 'discord',
    color: Colors.cyan,
  },
  {
    name: 'Reddit',
    icon: 'reddit',
    color: Colors.orange,
  },
  {
    name: 'Youtube',
    icon: 'youtube',
    color: Colors.red,
  },
];

export default More;
