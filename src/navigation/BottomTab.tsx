import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabScreens} from './routes';
import {BottomTabRoutes, ScreenOptions} from './types';
import {IconsFA, IconsFou, IconsIC} from '@assets/icons';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import {getSize} from '@utils/reponsive';
import {Colors} from '@theme/color';
const Tab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigation = () => {
  const screenOptions: ScreenOptions<
    BottomTabRoutes,
    BottomTabNavigationOptions
  > = {
    Home: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <IconsIC
          name={focused ? 'ios-home-sharp' : 'ios-home-outline'}
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    Stats: {
      tabBarLabel: 'Stats',
      tabBarIcon: ({focused}) => (
        <IconsIC
          name={focused ? 'stats-chart' : 'stats-chart-outline'}
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    Search: {
      tabBarLabel: 'Search',
      tabBarIcon: ({focused}) => (
        <IconsIC
          name={focused ? 'search' : 'search-outline'}
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    Profile: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <IconsFA
          name={focused ? 'user' : 'user-o'}
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    More: {
      tabBarLabel: 'More',
      tabBarIcon: ({focused}) => (
        <IconsFou
          name="indent-more"
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? getSize.v(80) : getSize.v(57),
        },
        tabBarItemStyle: {
          paddingTop: getSize.m(20),
        },
        tabBarButton: ({accessibilityState, style, children, ...props}) => (
          <Pressable
            accessibilityState={accessibilityState}
            {...props}
            style={style}>
            {accessibilityState?.selected && <View style={styles.bottom} />}
            {children}
          </Pressable>
        ),
      }}>
      {bottomTabScreens.map(({name, component}: any) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={screenOptions[name]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    top: 0,
    height: 8,
    width: '50%',
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
