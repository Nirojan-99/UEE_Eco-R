import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VehicleTopTab from '../VehicleTopTab/VehicleTopTab';
import FinishPickup from '../FinshPickup/FinishPickup';
import ManageVehicle from '../ManageVehicle/ManageVehicle';
import ManageDriver from '../ManageDriver.js/ManageDriver';

export default function VehicleScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Vehicles"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        headerShown: false,
        animation: 'fade_from_bottom',
        animationDuration: 0.005,
      }}>
      <Stack.Screen name="Vehicles" component={VehicleTopTab} />
      <Stack.Screen
        name="FinishPickup"
        options={{animation: 'fade'}}
        component={FinishPickup}
      />
      <Stack.Screen
        name="ManageVehicle"
        options={{animation: 'fade_from_bottom'}}
        component={ManageVehicle}
      />
      <Stack.Screen
        name="ManageDriver"
        options={{animation: 'fade_from_bottom'}}
        component={ManageDriver}
      />
    </Stack.Navigator>
  );
}
