import {View, Text, TextInput} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import ShadowGradientBG from '../ShadowGradiendBG/ShadowGradientBG';
import LinearGradient from 'react-native-linear-gradient';

export default function ShadowInput({text, multiline, set}) {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1,
      }}>
      <LinearGradient
        colors={['#EEF0F5', '#E6E9EF']}
        start={{x: -0.7, y: 1}}
        className="rounded-xl p-2 border-0">
        <TextInput
          onChangeText={val => {
            set(val);
          }}
          textAlignVertical={'top'}
          multiline={multiline}
          className="p-0 text-[#1C6758] text-[16px] font-semibold"
          value={text}
          numberOfLines={multiline ? 4 : 1}
        />
      </LinearGradient>
    </DropShadow>
  );
}
