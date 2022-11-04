import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Requests from '../Requests/Requests';
import CompanyDetails from '../CompanyDetails/CompanyDetails';

export default function RequestScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        headerShown: false,
        animation: 'fade_from_bottom',
        animationDuration: 0.0005,
      }}>
      <Stack.Screen name="Request" component={Requests} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
    </Stack.Navigator>
  );
}
