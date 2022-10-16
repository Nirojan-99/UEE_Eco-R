import {View, TextInput} from 'react-native';
import React from 'react';
import {Input as RNInput} from '@rneui/base';

export default function Input({children, type, placeHolder}) {
  return (
    <View className="flex-row border-[#1C6758] border-2 rounded-lg p-2 items-center">
      <View className="mr-2">{children}</View>
      <TextInput
        secureTextEntry={type === 'password'}
        contextMenuHidden={true}
        keyboardType={type}
        placeholder={placeHolder}
        placeholderTextColor={'#666'}
        className="font-semibold w-full  text-lg p-0 text-[#1C6758]"
      />
    </View>
  );
}
