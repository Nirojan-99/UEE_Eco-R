import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import plastic from '../../Assets/plastic-img.png';

export default function ProductInsight({data}) {
  return (
    <View className="flex-1 bg-white  mr-3 rounded-lg ">
      <Image
        source={plastic}
        style={{resizeMode: 'cover'}}
        className="w-full h-16 rounded-t-lg"
      />
      <View className="p-1">
        <Text
          numberOfLines={1}
          className="text-[15px] font-semibold text-[#1C6758]">
          {data.productName}
        </Text>
        <Text className="text-[12px]  text-slate-400 mt-1">
          Total Collection : {data.totalCollection} Kg
        </Text>
        <Text className="text-[12px]  text-slate-400 mt-1 mb-3">
          Total Collection : Rs {data?.totalCollection * data?.unitPrice}
        </Text>
      </View>
    </View>
  );
}
