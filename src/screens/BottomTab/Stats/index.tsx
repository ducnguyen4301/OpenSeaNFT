import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '@theme/color';
import {IconsEO, IconsIC} from '@assets/icons';
import Activity from './Activity';
import Rankings from './Rankings';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@components/Header';

const Tab = createMaterialTopTabNavigator();

const Stats = () => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <Header title="Stats" />
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
          name="Rankings"
          component={Rankings}
          options={{
            tabBarIcon: ({color}) => (
              <IconsIC name="stats-chart" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({color}) => (
              <IconsEO name="line-graph" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Stats;
