import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import Requests from './Requests/Requests';
import {useState} from 'react';
import RequestScreen from './RequestScreen/RequestScreen';
import ScheduleScreen from './ScheduleScreen/ScheduleScreen';

export default function DealerTab() {
  const Tab = createBottomTabNavigator();

  const [isVisible, setVisible] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Schedule"
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
      <Tab.Screen name="Requests" component={RequestScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Notification" component={Requests} />
      <Tab.Screen name="Account" component={Requests} />
    </Tab.Navigator>
  );
}
