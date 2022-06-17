import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
interface NonScrollProps {
  titleStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  DataComponent?: any;
  data?: any;
  flatlist?: any;
}

const NonScrollableSection: React.FC<NonScrollProps> = ({
  DataComponent,
  data,
  title,
  titleStyle,
}) => {
  return (
    <>
      {title && <Text style={[styles.sectionTitle, titleStyle]}>{title}</Text>}
      <View style={styles.container}>
        {data.map((item: any, index: any) => (
          <DataComponent key={index} {...item} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
  },
});

export default NonScrollableSection;
