import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@theme/color';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IconsEO, IconsFA5, IconsIC, IconsMCI} from '@assets/icons';
import UserActivity from './Activity';
import UserItems from './Items';
import ItemHeader from '@components/Avatar/ItemHeader';
const Tab = createMaterialTopTabNavigator();
const Profile = ({route}: any) => {
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  icons: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  detail: {
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  description: {
    color: Colors.medium,
    fontWeight: 'bold',
  },
});

export default Profile;
