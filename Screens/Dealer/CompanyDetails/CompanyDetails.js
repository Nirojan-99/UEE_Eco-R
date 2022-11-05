import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import DropShadow from 'react-native-drop-shadow';
import {Image} from 'react-native';
import company from '../../../Assets/company-green.png';
import user from '../../../Assets/user.png';
import key from '../../../Assets/key.png';
import pin from '../../../Assets/pin.png';

export default function CompanyDetails() {
  return (
    <SafeAreaView>
      {/* head */}
      <View className="mx-3 flex-row items-center justify-start space-x-3">
        <BackButton />
        <View>
          <Title text={'Company Details'} />
        </View>
      </View>
      {/* body */}
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.15,
          shadowRadius: 2,
        }}>
        <View className="rounded-lg mx-3 mt-5">
          <View className="p-3 bg-white rounded-lg">
            <View className="flex-row items-center justify-start space-x-3">
              <Image source={company} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">
                Company Name
              </Text>
            </View>
            <View className="flex-row items-center justify-start mt-3 space-x-3">
              <Image source={user} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">User name</Text>
            </View>
            <View className="flex-row items-center justify-start mt-3 space-x-3">
              <Image source={key} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">0778862172</Text>
            </View>
            <View className="flex-row items-center justify-start mt-3 space-x-3">
              <Image source={pin} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">address</Text>
            </View>
          </View>
        </View>
      </DropShadow>
    </SafeAreaView>
  );
}
