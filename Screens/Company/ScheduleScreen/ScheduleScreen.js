import React from 'react';
import Schedule from '../Schedule/Schedule';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
      <Stack.Screen name="Schedules" component={Schedule} />
    </Stack.Navigator>
  );
}
