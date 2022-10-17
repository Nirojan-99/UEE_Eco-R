import {View, Text} from 'react-native';
import React from 'react';

export default function Title({text}) {
  return (
    <View className="my-3">
      <Text className="text-black text-3xl font-bold">{text}</Text>
    </View>
  );
}
