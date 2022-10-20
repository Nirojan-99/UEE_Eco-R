import React from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RegisterAs from '../Register/RegisterAs';
import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import Explore from './Explore/Explore';

export default function CustomerTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Explore"
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        style: {
          borderWidth: 2,
          borderStyle: 'solid',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: 'transparent',
        },
        showLabel: false,
      }}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Schedule" component={RegisterAs} />
      <Tab.Screen name="Account" component={RegisterAs} />
    </Tab.Navigator>
  );
}
