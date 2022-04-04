import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
