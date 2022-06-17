import Stats from '@components/Stats';
import {Colors} from '@theme/color';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const UserActivity = () => {
  return (
    <ScrollView style={styles.container}>
      <Stats
        order={1}
        type="activity"
        image={
          'https://picsum.photos/200?random=' +
          Math.floor(Math.random() * 9 + 1)
        }
        username="CLONE X - X TAKASHI MURAKAMI"
        price={35977.13}
      />
      <Stats
        order={2}
        type="activity"
        image={
          'https://picsum.photos/200?random=' +
          Math.floor(Math.random() * 9 + 1)
        }
        username="RTFKT - CloneX Mintvial"
        price={13376.71}
      />
      <Stats
        order={3}
        type="activity"
        image={
          'https://picsum.photos/200?random=' +
          Math.floor(Math.random() * 9 + 1)
        }
        username="NeoTokyo Outer Identities"
        price={7580.63}
      />
      <Stats
        order={4}
        type="activity"
        image={
          'https://picsum.photos/200?random=' +
          Math.floor(Math.random() * 9 + 1)
        }
        username="CryptoPunks"
        price={7527.96}
      />
    </ScrollView>
  );
};

export default UserActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
