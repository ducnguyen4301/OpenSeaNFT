import React from 'react';
import {View, StyleSheet, Text, StyleProp, ViewStyle} from 'react-native';
import {CateItemType} from './types';

interface SectionProps {
  titleStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  item: CateItemType;
}

const Section: React.FC<SectionProps> = ({
  item,
  titleStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {item.title && (
        <Text style={[styles.sectionTitle, titleStyle]}>{item.title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  sectionTitle: {
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
  },
});

export default Section;
