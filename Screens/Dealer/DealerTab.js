import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import Requests from './Requests/Requests';
import {useState} from 'react';

export default function DealerTab() {
  const Tab = createBottomTabNavigator();

  const [isVisible, setVisible] = useState(true);
  return (
    <Tab.Navigator
      initialRouteName="Requests"
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
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen name="Schedule" component={Requests} />
      <Tab.Screen name="Notification" component={Requests} />
      <Tab.Screen name="Account" component={Requests} />
    </Tab.Navigator>
  );
}
