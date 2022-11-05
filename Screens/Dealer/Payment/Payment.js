import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transaction from '../Transaction/Transaction';
import PaymentManage from '../PaymentManage/PaymentManage';

export default function Payment() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Transaction"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="PaymentManage" component={PaymentManage} />
    </Stack.Navigator>
  );
}
