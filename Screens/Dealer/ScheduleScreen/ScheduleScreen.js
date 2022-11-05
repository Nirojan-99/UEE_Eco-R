import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedule from '../Schedule/Schedule';
import ScheduleConfirm from '../ScheduleConfirm/ScheduleConfirm';

export default function ScheduleScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Schedules"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        headerShown: false,
        animation: 'fade_from_bottom',
        animationDuration: 0.0005,
      }}>
      <Stack.Screen name="Schedules" component={Schedule} />
      <Stack.Screen name="ScheduleConfirm" component={ScheduleConfirm} />
    </Stack.Navigator>
  );
}
