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
        animation: 'fade_from_bottom',
        animationDuration: 0.005,
      }}>
      <Stack.Screen name="Schedules" component={Schedule} />
    </Stack.Navigator>
  );
}
