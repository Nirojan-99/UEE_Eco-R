import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import tick from '../../../Assets/tick.png';
import anime from '../../../Assets/confirm.png';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftCircleIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function ConfirmPickup() {
  const width = Dimensions.get('screen').width;

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
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
      <View className="mt-4">
        <Image className="h-80" style={{width: width}} source={anime} />
      </View>
      <View className="mt-4 mx-3 flex-row justify-end">
        <TouchableOpacity
          className="flex-row items-center space-x-2"
          onPress={goBack}>
          <ArrowLeftCircleIcon color={'#333'} />
          <Text className="text-black font-semibold text-lg">Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
