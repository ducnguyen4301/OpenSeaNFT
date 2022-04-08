import React from 'react';
import {View, TextInput} from 'react-native';

import {IconsFT} from '@assets/icons';
import {useTheme} from '@theme';
import styles from './styles';
const SearchInput = () => {
  const {Colors} = useTheme();
  return (
    <View style={styles.container}>
      <IconsFT
        name="search"
        size={20}
        color={Colors.grey}
        style={styles.icon}
      />
      <TextInput style={styles.input} placeholder="Search items" />
    </View>
  );
};

export default SearchInput;
