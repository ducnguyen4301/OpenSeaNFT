import {IconsIC} from '@assets/icons';
import Picker from '@components/Picker';
import Stats from '@components/Stats';
import {Colors} from '@theme/color';
import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';

const Rankings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Picker
          leftItem={
            <FastImage
              source={{
                uri:
                  'https://picsum.photos/200?random=' +
                  Math.floor(Math.random() * 9 + 1),
              }}
              style={styles.image}
            />
          }
          label="All categories"
        />
        <Picker
          leftItem={<IconsIC name="link" size={24} color={'gray'} />}
          label="All chains"
        />
      </View>
      <ScrollView style={styles.main}>
        <Stats
          order={1}
          type="rankings"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="CLONE X - X TAKASHI MURAKAMI"
          price={35977.13}
        />
        <Stats
          order={2}
          type="rankings"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="RTFKT - CloneX Mintvial"
          price={13376.71}
        />
        <Stats
          order={3}
          type="rankings"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="NeoTokyo Outer Identities"
          price={7580.63}
        />
        <Stats
          order={4}
          type="rankings"
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 9 + 1)
          }
          username="CryptoPunks"
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
    borderTopColor: Colors.gray,
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default Rankings;
