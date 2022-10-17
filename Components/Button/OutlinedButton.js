import {Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';

export default function OutlinedButton({text, submitHandler, children, right}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={submitHandler}
      className="border-[#1C6758] border-2 rounded-md p-2 flex-row items-center justify-center">
      {!right && <View>{children}</View>}
      <View className=" flex-1 flex justify-center">
        <Text className="font-bold text-[#1C6758] text-xl text-center">
          {text}
        </Text>
      </View>
      {right && <View>{children}</View>}
    </TouchableOpacity>
  );
}
