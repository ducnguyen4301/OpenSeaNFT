import React from 'react';
import NFTCard from '@components/Home/NFT/NFTCard';
import SearchInput from '@components/Search';
import {Colors} from '@theme/color';
import data from 'data';

import {ScrollView, StyleSheet} from 'react-native';
import NonScrollableSection from '@components/NonScroll';

const UserItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <SearchInput />
      <NonScrollableSection DataComponent={NFTCard} data={data.nfts} />
    </ScrollView>
  );
};

export default UserItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
