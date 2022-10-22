import {View, Text} from 'react-native';
import React from 'react';

export default function TransactionItem({item}) {
  return (
    <View className="flex-row items-center space-x-2 mb-2">
      <View className="w-10 h-10 bg-[#1C6758] rounded-lg "></View>
      <View className="flex-1 flex-col items-start">
        <Text className="text-[#1C6758] font-semibold text-[14px]">
          Company Name
        </Text>
        <Text className="text-gray-500 text-[11px]">2022-12-23</Text>
      </View>
      <Text className="text-gray-500 text-[11px]">Rs {item}.00</Text>
    </View>
  );
}
