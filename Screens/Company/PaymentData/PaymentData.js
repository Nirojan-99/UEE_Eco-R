import {View, Text} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import visa from '../../../Assets/visa.png';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

export default function PaymentData() {
  const navigation = useNavigation();

  const editNavigate = () => {
    navigation.navigate('ManagePayment');
  };

  return (
    <SafeAreaView>
      <View className="mx-3 mt-6">
        <DropShadow
          style={{
            shadowColor: '#222',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2,
          }}>
          <LinearGradient
            colors={['#EEF0F5', '#E6E9EF']}
            start={{x: -0.7, y: 1}}
            className="rounded-xl p-2 border-0">
            <View className="flex-row items-center justify-between">
              <Text className="text-[#1C6758] font-semibold text-lg">
                Card holder name
              </Text>
              <Image
                source={visa}
                className="w-14 h-14"
                style={{resizeMode: 'center'}}
              />
            </View>
            <View className="flex-row items-center justify-between my-3 mt-5">
              <Text className="text-[#1C6758] font-semibold text-lg">
                **** **** 1234
              </Text>
              <Text className="text-[#1C6758] font-semibold text-lg">
                12/23
              </Text>
            </View>
          </LinearGradient>
        </DropShadow>
        <View className="mt-4 flex-row justify-end">
          <View>
            <TouchableOpacity onPress={editNavigate}>
              <Text className="text-gray-600 text-md font-semibold px-3 py-1 bg-white rounded-lg">
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
