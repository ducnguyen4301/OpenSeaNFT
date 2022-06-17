import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import {Colors} from '@theme/color';
import Picker from '@components/Picker';
import {IconsIC, IconsMCI} from '@assets/icons';
import Stats from '@components/Stats';

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Picker
          leftItem={<IconsMCI name="cart" size={24} color={'gray'} />}
          label="Sales"
        />
        <Picker
          leftItem={<IconsIC name="link" size={24} color={'gray'} />}
          label="All chains"
        />
      </View>
      <ScrollView style={styles.main}>
        <Stats
          type="activity"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="Micky Rabbit #0000"
          price={0}
        />
        <Stats
          order={2}
          type="activity"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="Mask Punks #Promo"
          price={13376.71}
        />
        <Stats
          order={3}
          type="activity"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="BADASS Apes Club Official (Free Airdrop)"
          price={7580.63}
        />
        <Stats
          order={4}
          type="activity"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="A. B. A. C. (Advertisement)"
          price={7527.96}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  top: {
    marginVertical: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    borderTopWidth: 0.2,
    borderTopColor: Colors.medium,
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default Activity;
