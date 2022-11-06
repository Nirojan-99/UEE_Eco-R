import React, {useState} from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import Explore from './Explore/Explore';
import Account from './Account/Account';
import ScheduleScreen from './ScheduleScreen/ScheduleScreen';

export default function CustomerTab() {
  const Tab = createBottomTabNavigator();

  const [isVisible, setVisible] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Explore"
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
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
