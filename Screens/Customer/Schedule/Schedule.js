import React from 'react';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedules from '../Schedules/Schedules';

export default function Schedule() {
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
      {/* <Stack.Screen name="Request" component={RequestPickup} />
      <Stack.Screen name="Confirm" component={ConfirmPickup} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{presentation: 'transparentModal', animation: 'slide_from_bottom'}}
      /> */}
    </Stack.Navigator>
  );
}
