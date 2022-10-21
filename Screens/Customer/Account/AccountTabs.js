import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../Profile/Profile';
import {Text, View} from 'react-native';
import CustomTabBar from '../../../Components/CustomTabBar.js/CustomTabBar';
import Security from '../Security/Security';
import Payment from '../Payment/Payment';

export default function AccountTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBar={props => (
        <View>
          <CustomTabBar {...props} />
        </View>
      )}>
      <Tab.Screen name="Account" component={Profile} />
      <Tab.Screen name="Security" component={Security} />
      <Tab.Screen name="Payment" component={Payment} />
    </Tab.Navigator>
  );
}
