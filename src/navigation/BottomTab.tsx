import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabScreens} from './routes';
import {BottomTabRoutes, ScreenOptions} from './types';
import {IconsFA} from '@assets/icons';
import {useTheme} from '@theme';
const Tab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigation = () => {
  const {Colors} = useTheme();
  const screenOptions: ScreenOptions<
    BottomTabRoutes,
    BottomTabNavigationOptions
  > = {
    Home: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <IconsFA
          name="home"
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    MyOrders: {
      tabBarLabel: 'Stats',
      tabBarIcon: ({focused}) => (
        <IconsFA
          name="receipt"
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    Likes: {
      tabBarLabel: 'Search',
      tabBarIcon: ({focused}) => (
        <IconsFA
          name="heart"
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Notifications: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <IconsFA
          name="bell"
          size={24}
          color={focused ? Colors.primary : Colors.black}
        />
      ),
    },
    Me: {
      tabBarLabel: 'More',
      tabBarIcon: ({focused}) => (
        <IconsFA
          name="user"
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
