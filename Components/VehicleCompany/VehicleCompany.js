import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowLongRightIcon} from 'react-native-heroicons/solid';
import {Image} from 'react-native';
import palette from '../../Assets/palette.png';
import user from '../../Assets/user.png';
import key from '../../Assets/key.png';
import {useNavigation} from '@react-navigation/native';

export default function VehicleCompany() {
  const navigation = useNavigation();

  const editVehicle = () => {
    navigation.navigate('ManageVehicle');
  };
  return (
    <View className="bg-white rounded-sm">
      <View className="flex-row items-center justify-between">
        <View className="p-2">
          {/*  */}
          <View className="flex-row items-baseline justify-start">
            <Text className="text-[#1C6758] text-lg font-semibold">Lorry</Text>
            <Text className="text-[#1C6758] ml-3">WP ABC 1234</Text>
          </View>
          {/*  */}
          <View className="flex-row items-center justify-start mt-2">
            <Image source={palette} style={{width: 20, height: 20}} />
            <Text className="text-[#333] ml-3 font-semibold">Red</Text>
          </View>
          {/*  */}
          <View className="flex-row items-center justify-start mt-2">
            <Image source={user} style={{width: 20, height: 20}} />
            <Text className="text-[#333] ml-3 font-semibold">Nirojan</Text>
          </View>
          {/*  */}
          <View className="flex-row items-center justify-start mt-2">
            <Image source={key} style={{width: 20, height: 20}} />
            <Text className="text-[#333] ml-3 font-semibold">0778862172</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={editVehicle}
          activeOpacity={0.7}
          className="bg-[#1C6758] h-full items-center w-1/4 flex-row justify-center rounded-l-sm">
          <ArrowLongRightIcon color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
