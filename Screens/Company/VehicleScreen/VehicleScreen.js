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
      initialRouteName="Products"
      screenOptions={{
        headerRight: () => <></>,
        headerLeft: () => <></>,
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 0.005,
      }}>
      <Stack.Screen name="Vehicles" component={VehicleTopTab} />
      <Stack.Screen name="FinishPickup" component={FinishPickup} />
      <Stack.Screen name="ManageVehicle" component={ManageVehicle} />
      <Stack.Screen name="ManageDriver" component={ManageDriver} />
    </Stack.Navigator>
  );
}
