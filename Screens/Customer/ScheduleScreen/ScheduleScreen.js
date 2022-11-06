import React from 'react';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedules from '../Schedules/Schedules';

export default function ScheduleScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 0.005,
      }}>
      <Stack.Screen name="Schedules" component={Schedules} />
    </Stack.Navigator>
  );
}
