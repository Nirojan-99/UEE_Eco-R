import {View, Text} from 'react-native';
import React from 'react';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../Products/Products';
import RequestPickup from '../RequestPickup/RequestPickup';
import ConfirmPickup from '../ConfirmPickup/ConfirmPickup';
import Search from '../Search/Search';

export default function Explore() {
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
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Request" component={RequestPickup} />
      <Stack.Screen name="Confirm" component={ConfirmPickup} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          presentation: 'transparentModal',
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
}
