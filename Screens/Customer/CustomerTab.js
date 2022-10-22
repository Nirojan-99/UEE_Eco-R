import React, {useEffect, useLayoutEffect, useState} from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RegisterAs from '../Register/RegisterAs';
import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import Explore from './Explore/Explore';
import Schedule from './Schedule/Schedule';
import Account from './Account/Account';

export default function CustomerTab() {
  const Tab = createBottomTabNavigator();

  const [isVisible, setVisible] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Account"
      tabBar={props => {
        return isVisible ? <CustomBottomTabBar {...props} /> : null;
      }}
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
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
