import Header from '@components/Header';
import {Section, Card} from '@components/Home';
import NonScroll from '@components/NonScroll';
import SearchInput from '@components/Search';
import UserProfile from '@components/UserProfile';
import data from 'data';
import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

const Search = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title="Search" />
        <SearchInput />
        <Section
          title="All categories"
          titleStyle={styles.sectionTitle}
          containerStyle={styles.sectionContainer}
          DataComponent={Card}
          data={data.categories}
        />
        <NonScroll
          title="Trending collections"
          titleStyle={styles.secondSectionTitle}
          DataComponent={UserProfile}
          data={data.users}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
