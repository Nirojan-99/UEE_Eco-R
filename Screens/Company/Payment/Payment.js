import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentData from '../PaymentData/PaymentData';
import ManagePayment from '../ManagePayment/ManagePayment';

export default function Payment() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="PaymentData"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 0.005,
      }}>
      <Stack.Screen name="PaymentData" component={PaymentData} />
      <Stack.Screen
        name="ManagePayment"
        options={{animation: 'fade_from_bottom'}}
        component={ManagePayment}
      />
    </Stack.Navigator>
  );
}
