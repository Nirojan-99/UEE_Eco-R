import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function ContainedButton({text, submitHandler, disabled}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={submitHandler}
      disabled={disabled}
      className="bg-[#1C6758] rounded-md p-2 flex-row items-center justify-center">
      <Text className="font-bold text-white text-lg" style={{letterSpacing: 2}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
