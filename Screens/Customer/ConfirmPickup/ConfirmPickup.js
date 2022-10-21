import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import tick from '../../../Assets/tick.png';
import anime from '../../../Assets/confirm.png';

export default function ConfirmPickup() {

  const width = Dimensions.get('screen').width;
  
  return (
    <SafeAreaView className="my-3">
      <View className="mx-3">
        <Title text={'Confirmation'} />
      </View>
      <View className="mt-5 bg-blue-100 p-3 rounded-xl mx-3">
        <View className="flex-row items-center justify-start ">
          <Image source={tick} className="h-8 w-8" />
          <Text
            className="text-black font-semibold text-[15px] ml-2 flex-1"
            numberOfLines={1}>
            Pickup Request is successfully sent
          </Text>
        </View>
        <View className="my-2">
          <Text className="text-[#1C6758] text-md font-semibold">
            Waiting for a dealer to accept the pickup...
          </Text>
        </View>
        <View className="my-2">
          <Text
            className="text-gray-400 text-md font-semibold"
            numberOfLines={2}>
            Keep you products ready to be collected by the dealers.
          </Text>
        </View>
      </View>
      <View className=" flex-1 w-full mt-20">
        <Image className="h-80" style={{width: width}} source={anime} />
      </View>
    </SafeAreaView>
  );
}
