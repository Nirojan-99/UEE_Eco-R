import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import product from '../../Assets/product.png';
import weight from '../../Assets/weight.png';
import user from '../../Assets/user.png';
import truck from '../../Assets/truck-g.png';
import key from '../../Assets/key.png';
import calendar from '../../Assets/calendar.png';

export default function CollectionFromCustomer() {
  return (
    <View className="bg-white rounded-lg shadow-xl w-56 border-l-4 border-[#3D8361]">
      <View className="flex-row items-center justify-start mx-2 my-2">
        <Image source={product} style={{height: 20, width: 20}} />
        <Text className="text-[#1C6758] ml-3 font-semibold text-[14px]">
          Used Plastic
        </Text>
      </View>
      <View className="flex-row items-center justify-start mx-2 my-2">
        <Image source={weight} style={{height: 20, width: 20}} />
        <Text className="text-[#1C6758] ml-3 font-semibold text-[14px]">
          2 Kg
        </Text>
      </View>
      <View className="flex-row items-center justify-start mx-2 my-2">
        <Image source={user} style={{height: 20, width: 20}} />
        <Text className="text-[#1C6758] ml-3 font-semibold text-[14px]">
          Nirojan
        </Text>
      </View>
      <View className="flex-row items-center justify-start mx-2 my-2">
        <Image source={key} style={{height: 20, width: 20}} />
        <Text className="text-[#1C6758] ml-3 font-semibold text-[14px]">
          0778862172
        </Text>
      </View>
      <View className="flex-row items-center justify-start mx-2 my-2">
        <Image source={truck} style={{height: 20, width: 20}} />
        <Text className="text-[#1C6758] ml-3 font-semibold text-[14px]">
          WP ABC 1234
        </Text>
      </View>
      <View className="flex-row items-center justify-start mx-2 my-2 mb-3">
        <Image source={calendar} style={{height: 20, width: 20}} />
        <Text className="text-[#1C6758] ml-3 font-semibold text-[14px]">
          12-12-2022
        </Text>
      </View>
    </View>
  );
}
