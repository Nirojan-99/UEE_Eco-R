import {View, Text} from 'react-native';
import React from 'react';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../Products/Products';

export default function Explore() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => <></>,
          headerLeft: () => <></>,
            title: 'Products',
            headerStyle: {backgroundColor: 'transparent'},
          headerShown: false,
        }}
        name="Products"
        component={Products}
      />
    </Stack.Navigator>
  );
}
