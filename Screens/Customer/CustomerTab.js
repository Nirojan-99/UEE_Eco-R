import {View, Text} from 'react-native';
import React from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Login/Login';
import RegisterAs from '../Register/RegisterAs';

export default function CustomerTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Explore" component={Login} />
      <Tab.Screen name="Schedule" component={RegisterAs} />
    </Tab.Navigator>
  );
}
