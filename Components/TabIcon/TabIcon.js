import {View, Text} from 'react-native';
import React from 'react';
import RenderIf from '../RenderIf/RenderIf';

export default function TabIcon({focused, label, children, length}) {
  return (
    <View
      className={`flex-row ${
        length === 4 ? 'px-3' : 'px-5'
      } items-center border-2 rounded-3xl py-2  border-[#1C6758] ${
        focused && 'bg-[#1C6758]'
      }`}>
      <View>{children}</View>
      <RenderIf isTrue={focused}>
        <View className=" flex-row items-center justify-center ml-3">
          <Text
            className={`text-[#1C6758] text-lg text-center font-semibold ${
              focused && 'text-[#fff]'
            }`}>
            {label}
          </Text>
        </View>
      </RenderIf>
    </View>
  );
}
