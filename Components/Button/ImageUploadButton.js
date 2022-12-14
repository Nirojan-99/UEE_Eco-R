import {View, Text} from 'react-native';
import React from 'react';
import {ArrowUpTrayIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native';

export default function ImageUploadButton({onPress, children, text}) {
  return (
    <View className="w-full border-dashed border-2 border-[#1C6758] p-2">
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View className="bg-gray-300 rounded-sm  p-2 flex-row items-center justify-center">
          {children}
          <Text className="text-[#1C6758] font-bold text-lg ml-3">{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
