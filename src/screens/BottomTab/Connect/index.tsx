import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IconsEO, IconsIC, IconsMCI} from '@assets/icons';
import {Colors} from '@theme/color';
import localImages from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import Header from '@components/Header';
import FastImage from 'react-native-fast-image';

const Connect = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header title="Profile" />
      <View style={styles.top}>
        <IconsEO name="wallet" size={100} color={Colors.primary} />
        <Text style={styles.title}>Connect with wallet</Text>
        <Text style={styles.description}>
          Your crypto wallet securely stores your digital goods and
          cryptocurrencies. Connect to one wallet provider
        </Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity style={styles.button}>
          <FastImage source={localImages().meta_mask} style={styles.image} />
          <Text style={styles.buttonTitle}>MetaMask</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconsMCI name="shield" size={25} color={Colors.primary} />
          <Text style={styles.buttonTitle}>Trust Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconsIC name="link" size={25} color={Colors.primary} />
          <Text style={styles.buttonTitle}>Enter ethereum address</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.new}>New to wallets?</Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>Learn more</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Connect;
