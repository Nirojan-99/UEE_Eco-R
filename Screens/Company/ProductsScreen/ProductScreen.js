import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../Products/Products';
import ManageProduct from '../ManageProduct/ManageProduct';

export default function ProductScreen() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    initialRouteName="ManageProducts"
    screenOptions={{
      headerRight: () => <></>,
      headerLeft: () => <></>,
      headerShown: false,
      animation: 'slide_from_right',
      animationDuration: 0.005,
    }}>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="ManageProducts" component={ManageProduct} />
    <Stack.Screen name="ImageTake" component={ManageProduct} />
    {/* <Stack.Screen name="Request" component={RequestPickup} />
    <Stack.Screen name="Confirm" component={ConfirmPickup} />
    <Stack.Screen
      name="Search"
      component={Search}
      options={{presentation: 'transparentModal', animation: 'slide_from_bottom'}}
    /> */}
  </Stack.Navigator>
  )
}