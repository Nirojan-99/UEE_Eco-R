import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Vehicle from '../Vehicle/Vehicle';
import TakeImage from '../TakeImage/TakeImage';

export default function VehicleScreen() {
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
      <Stack.Screen name="VehicleData" component={Vehicle} />
      <Stack.Screen name="TakeImage" component={TakeImage} />
    </Stack.Navigator>
  );
}
