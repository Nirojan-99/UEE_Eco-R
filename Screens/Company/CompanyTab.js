import React, {useState} from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import RegisterAs from '../Register/RegisterAs';
import ProductScreen from './ProductsScreen/ProductScreen';
import ScheduleScreen from './ScheduleScreen/ScheduleScreen';

export default function CompanyTab() {
  const Tab = createBottomTabNavigator();

  const [isVisible, setVisible] = useState(true);
  return (
    <Tab.Navigator
      initialRouteName="Schedule"
      tabBar={props => {
        return isVisible ? <CustomBottomTabBar {...props} /> : null;
      }}
      screenOptions={{
        headerShown: false,
        style: {
          borderWidth: 2,
          borderStyle: 'solid',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: 'transparent',
        },
        showLabel: false,
      }}>
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Vehicle" component={RegisterAs} />
      <Tab.Screen name="Account" component={RegisterAs} />
    </Tab.Navigator>
  );
}
