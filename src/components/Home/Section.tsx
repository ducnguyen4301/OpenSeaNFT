import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './Styles/SectionStyles';
import {CateItemType} from './types';

interface SectionProps {
  titleStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  item?: CateItemType;
  title?: string;
  DataComponent?: any;
  data?: any;
  flatlist?: any;
}

const Section: React.FC<SectionProps> = ({
  title,
  DataComponent,
  data,
  containerStyle,
  titleStyle,
  flatlist,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={[styles.sectionTitle, titleStyle]}>{title}</Text>}
      {flatlist ? (
        <FlatList
          data={data}
          renderItem={({item}) => <DataComponent {...item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item: any, index: any) => (
            <DataComponent key={index} {...item} scrollable />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Section;
