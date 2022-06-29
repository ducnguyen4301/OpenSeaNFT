import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {useTheme} from '@theme';
import React, {useState} from 'react';
import {commonScreens, notLoggedInScreens, userScreens} from './routes';
import {RootStackRoutes, ScreenOptions} from './types';

const RootStack = createStackNavigator<RootStackRoutes>();

const RootStackNavigation = () => {
  const {Fonts, Colors} = useTheme();

  const screenOptions: ScreenOptions<RootStackRoutes, StackNavigationOptions> =
    {BottomTab: {headerShown: false}};

  const defaultOptions = ({}: any) => ({
    title: '',
    headerTitleAllowFontScaling: false,
    headerShown: false,
    headerTitleStyle: {
      ...Fonts.bold,
      color: Colors.dark,
      fontSize: 16,
    },
    headerStyle: {shadowOpacity: 0, elevation: 0},
  });
  const [isAuth] = useState<boolean>(true);

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={defaultOptions}>
        {Object.entries({
          ...commonScreens,
          ...(isAuth ? userScreens : notLoggedInScreens),
        }).map(([name, component]: any) => (
          <RootStack.Screen
            key={name}
            name={name}
            component={component}
            options={screenOptions[name]}
          />
        ))}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
