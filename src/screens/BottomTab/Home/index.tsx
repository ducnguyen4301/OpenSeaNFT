import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import AppHeader from '@components/Header';
import {Card, Section} from '@components/Home';
import {Colors} from '@theme/color';
import data from 'data';
import NFTCard from '@components/NFT/NFTCard';
import UserProfile from '@components/UserProfile';
const Home = () => {
  return (
    <SafeAreaView>
      <AppHeader title="OpenSea" />
      <ScrollView contentContainerStyle={styles.container}>
        <Section DataComponent={Card} data={data.categories} />
        <Section
          title="Notable Drops"
          DataComponent={Card}
          data={data.notableDrops}
        />
        <Section
          title="Trending collections"
          DataComponent={UserProfile}
          data={data.users}
        />
        <Section
          title="Hot new items"
          DataComponent={NFTCard}
          data={data.nfts}
        />
        <Section
          title="Expiring Soon"
          DataComponent={NFTCard}
          data={data.nfts}
        />
        <Section
          title="New top sellers"
          DataComponent={NFTCard}
          data={data.nfts}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
  },
});
export default Home;
