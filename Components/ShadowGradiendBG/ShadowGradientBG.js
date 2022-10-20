import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';

export default function ShadowGradientBG({children}) {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: .15,
        shadowRadius: 1,
      }}>
      <LinearGradient
        colors={['#EEF0F5', '#E6E9EF']}
        start={{x: -0.7, y: 1}}
        className="flex-1 rounded-xl">
        {children}
      </LinearGradient>
    </DropShadow>
  );
}
