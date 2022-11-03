import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native';
import VehicleCompany from '../../../Components/VehicleCompany/VehicleCompany';
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid';

export default function Vehicle() {
  const renderItem = () => {
    return (
      <View className="mb-4">
        <VehicleCompany />
      </View>
    );
  };

  const data = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView>
      <View className="mt-3">
        {/* <View className="flex-1 mt-3 bg-slate-400 p-5 flex-row items-center justify-center">
          <Text>Add Vehicle</Text>
          <ArrowLongLeftIcon color={'#1C6758'} />
        </View> */}
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
