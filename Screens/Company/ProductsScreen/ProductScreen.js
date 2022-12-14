import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../Products/Products';
import ManageProduct from '../ManageProduct/ManageProduct';
import TakeImage from '../TakeImage/TakeImage';
import Search from '../Search/Search';
import Insights from '../Insight/Insights';

export default function ProductScreen() {
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
      <Stack.Screen name="ManageProducts" component={ManageProduct} />
      <Stack.Screen name="ImageTake" component={TakeImage} />
      <Stack.Screen name="Insights" component={Insights} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
    </Stack.Navigator>
  );
}
