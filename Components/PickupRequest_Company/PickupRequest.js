import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import user from '../../Assets/user.png';
import key from '../../Assets/key.png';
import pin from '../../Assets/pin.png';
import calendar from '../../Assets/calendar.png';
import clock from '../../Assets/clock.png';
import {TouchableOpacity} from 'react-native';
import {ArrowRightCircleIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function PickupRequest() {
  const navigation = useNavigation();

  const handleFinish = () => {
    navigation.navigate('FinishPickup');
  };

  return (
    <View className="flex-1 rounded-sm mx-3 bg-white my-2">
      <View className="flex-row items-start justify-between p-3">
        <View className="flex-1">
          {/* customer */}
          <View className="flex-row items-center justify-start mb-2">
            <Image source={user} style={{height: 25, width: 25}} />
            <Text className="text-[#1C6758] font-semibold ml-3">Nirojan</Text>
          </View>
          {/* contact */}
          <View className="flex-row items-center justify-start mb-2">
            <Image source={key} style={{height: 25, width: 25}} />
            <Text className="text-[#1C6758] font-semibold ml-3">
              0778862172
            </Text>
          </View>
        </View>
        <View className="flex-1">
          {/* address */}
          <View className="flex-row items-center justify-start mb-2">
            <Image source={pin} style={{height: 25, width: 25}} />
            <Text className="text-[#1C6758] font-semibold ml-3">
              Jffna, lane 3
            </Text>
          </View>
          {/* date */}
          <View className="flex-row items-center justify-start mb-2">
            <Image source={calendar} style={{height: 25, width: 25}} />
            <Text className="text-[#1C6758] font-semibold ml-3">
              12-12-2022
            </Text>
          </View>
          {/* date */}
          <View className="flex-row items-center justify-start">
            <Image source={clock} style={{height: 25, width: 25}} />
            <Text className="text-[#1C6758] font-semibold ml-3">
              12.00 PM - 2.00PM
            </Text>
          </View>
        </View>
      </View>
      {/* btn */}
      <View className="bg-[#1C6758] p-2 flex-1 flex-row justify-end rounded-b-sm">
        <TouchableOpacity
          onPress={handleFinish}
          className="flex-row items-center">
          <Text className="text-white font-semibold text-[16px] mr-3">
            Finish Pickup
          </Text>
          <ArrowRightCircleIcon color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
