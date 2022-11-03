import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pickup from '../Pickup/Pickup';
import Vehicle from '../Vehicle/Vehicle';
import CustomTabBar from '../../../Components/CustomTabBar.js/CustomTabBar';
import Title from '../../../Components/Title/Title';

export default function VehicleTopTab() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View className="flex-1 ">
      <View className="mx-3">
        <Title text={'Vehicle'} />
      </View>
      <Tab.Navigator
        initialRouteName="Vehicle"
        tabBar={props => (
          <View>
            <CustomTabBar {...props} />
          </View>
        )}>
        <Tab.Screen name="Pickup" component={Pickup} />
        <Tab.Screen name="Vehicle" component={Vehicle} />
      </Tab.Navigator>
    </View>
  );
}
