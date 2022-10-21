import {View, Text} from 'react-native';
import React from 'react';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../Products/Products';
import RequestPickup from '../RequestPickup/RequestPickup';
import ConfirmPickup from '../ConfirmPickup/ConfirmPickup';

export default function Explore() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Confirm"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        title: 'Products',
        headerStyle: {backgroundColor: 'transparent'},
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 0.005,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Request" component={RequestPickup} />
      <Stack.Screen name="Confirm" component={ConfirmPickup} />
    </Stack.Navigator>
  );
}
