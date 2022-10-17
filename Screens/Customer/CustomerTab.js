import {View, Text} from 'react-native';
import React from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Login/Login';
import RegisterAs from '../Register/RegisterAs';
import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';

export default function CustomerTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        style: {
          // borderColor: COLORS.red,
          borderWidth: 2,
          borderStyle: 'solid',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: 'transparent',
        },
        // activeTintColor: COLORS.active,
        showLabel: false,
      }}>
      <Tab.Screen name="Explore" component={Login} />
      <Tab.Screen name="Schedule" component={RegisterAs} />
      <Tab.Screen name="Account" component={RegisterAs} />
    </Tab.Navigator>
  );
}
