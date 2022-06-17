import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {IconsEO} from '@assets/icons';
import {Colors} from '@theme/color';

interface PickerProps {
  label?: string;
  leftItem?: JSX.Element;
}
const Picker: React.FC<PickerProps> = ({label, leftItem}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {leftItem}
      <Text style={styles.label}>{label}</Text>
      <IconsEO name="chevron-down" size={24} color={Colors.gray} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: Colors.medium,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginHorizontal: 8,
  },
  label: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Picker;
