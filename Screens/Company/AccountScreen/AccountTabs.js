import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../Profile/Profile';
import Security from '../Security/Security';
import Payment from '../Payment/Payment';
import CustomTabBar from '../../../Components/CustomTabBar.js/CustomTabBar';
import Transaction from '../Transaction/Transaction';

export default function AccountTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Payment"
      tabBar={props => (
        <View>
          <CustomTabBar {...props} />
        </View>
      )}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Security" component={Security} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Transaction" component={Transaction} />
    </Tab.Navigator>
  );
}
