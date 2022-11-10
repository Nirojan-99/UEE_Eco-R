import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native';
import VehicleCompany from '../../../Components/VehicleCompany/VehicleCompany';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function Vehicle() {
  const renderItem = () => {
    return (
      <View className="mb-4">
        <VehicleCompany />
      </View>
    );
  };

  const navigation = useNavigation();

  const addVehicle = () => {
    navigation.navigate('ManageVehicle');
  };

  const data = [1, 2];
  return (
    <SafeAreaView>
      <View className="mt-3">
        <TouchableOpacity onPress={addVehicle} className="">
          <View className="mt-3 mb-3 mx-3 bg-slate-200 rounded-sm p-2 flex-row items-center justify-center space-x-6">
            <Text className="text-[#1C6758] font-semibold z-20">
              Add Vehicle
            </Text>
            <ArrowLongRightIcon color={'#1C6758'} />
          </View>
        </TouchableOpacity>
        {/* TODO */}
        <FlatList
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{marginHorizontal: 12}}
        />
      </View>
    </SafeAreaView>
  );
}
