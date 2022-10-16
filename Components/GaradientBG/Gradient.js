import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Gradient({children}) {
  return (
    <LinearGradient
      colors={['#EEF0F5', '#E6E9EF']}
      start={{x: -0.7, y: 1}}
      className="flex-1">
      {children}
    </LinearGradient>
  );
}
