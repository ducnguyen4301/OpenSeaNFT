import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@theme/color';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IconsEO, IconsFA5, IconsIC, IconsMCI} from '@assets/icons';
import UserActivity from './UserActivity';
import UserItems from './Items';
import ItemHeader from '@components/Avatar/ItemHeader';
import styles from './styles';
const Tab = createMaterialTopTabNavigator();
const UserProfile = ({route}: any) => {
  const {
    user: {title, coverImage, image, verified},
  } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ItemHeader {...{title, image, coverImage, verified}} />
      <View style={styles.icons}>
        <IconsMCI name="discord" color={Colors.grey} size={30} />
        <IconsFA5 name="telegram" color={Colors.grey} size={30} />
        <IconsMCI name="twitter" color={Colors.grey} size={30} />
        <IconsMCI name="instagram" color={Colors.grey} size={30} />
        <IconsMCI name="reddit" color={Colors.grey} size={30} />
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.price}>500</Text>
          <Text style={styles.description}>items</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.price}>100</Text>
          <Text style={styles.description}>owners</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.priceContainer}>
            <IconsMCI name="ethereum" size={20} />
            <Text style={styles.price}>0.5</Text>
          </View>
          <Text style={styles.description}>floor price</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.priceContainer}>
            <IconsMCI name="ethereum" size={20} />
            <Text style={styles.price}>200</Text>
          </View>
          <Text style={styles.description}>traded</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: 16,
          },
          tabBarItemStyle: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primary,
            height: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Tab.Screen
          name="Items"
          component={UserItems}
          options={{
            tabBarIcon: ({color}) => (
              <IconsIC name="list" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={UserActivity}
          options={{
            tabBarIcon: ({color}) => (
              <IconsEO name="line-graph" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
};

export default UserProfile;
