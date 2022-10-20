import React, {useEffect, useLayoutEffect, useState} from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RegisterAs from '../Register/RegisterAs';
import CustomBottomTabBar from '../../Components/CustomBottomTabBar/CustomBottomTabBar';
import Explore from './Explore/Explore';
import {Keyboard} from 'react-native';
import RenderIf from '../../Components/RenderIf/RenderIf';

export default function CustomerTab() {
  const Tab = createBottomTabNavigator();

  const [isVisible, setVisible] = useState(true);

  // useEffect(() => {
  //   const show = Keyboard.addListener('keyboardDidShow', setVisible(false));
  //   // const hide = Keyboard.addListener('keyboardDidHide', () => {
  //   //   setVisible(true);
  //   // });

  //   return () => {
  //     show.remove();
  //     // hide.remove();
  //   };
  // }, []);

  return (
    <Tab.Navigator
      initialRouteName="Explore"
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
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Schedule" component={RegisterAs} />
      <Tab.Screen name="Account" component={RegisterAs} />
    </Tab.Navigator>
  );
}
