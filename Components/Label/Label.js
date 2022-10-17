import {View, Text} from 'react-native';
import React from 'react';

export default function Label({text}) {
  return (
    <View className="mb-2 mt-2">
      <Text className="text-[#1C6758] font-semibold text-[15px]">{text}</Text>
    </View>
  );
}
