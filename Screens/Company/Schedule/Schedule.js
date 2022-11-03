import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../../Components/Title/Title';
import {FlatList} from 'react-native';
import CollectionFromDealer from '../../../Components/CollectionFromDealer/CollectionFromDealer';
import CollectionFromCustomer from '../../../Components/CollectionFromCustomer/CollectionFromCustomer';

export default function Schedule() {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({item}) => {
    return (
      <View className="mr-4">
        <CollectionFromDealer />
      </View>
    );
  };
  const renderCustomerItem = ({item}) => {
    return (
      <View className="mr-4">
        <CollectionFromCustomer />
      </View>
    );
  };
  return (
    <SafeAreaView className="flex-1">
      {/* head */}
      <View className="mx-3">
        <Title text="Schedule" />
      </View>
      {/* body */}
      <View className="flex-1 h-1/2">
        <View className="relative mt-3 ">
          <View className="bg-[#1C6758] h-48 top-0 absolute ring-0 left-0 w-full rounded-bl-[40px]" />
          <View className="absolute top-0 ring-0 left-0 w-full">
            <Text className="m-3 font-semibold text-xl text-white ">
              Collection from dealer
            </Text>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{padding: 12, paddingRight: 0}}
            />
          </View>
        </View>
      </View>
      <View className="relative mt-5 h-1/2 top-6">
        <View className="bg-[#355764]  h-48 top-0 absolute ring-0 left-0 w-full rounded-bl-[40px]" />
        <View className="absolute top-0 ring-0 left-0 w-full">
          <Text className="m-3 font-semibold text-xl text-white ">
            Collection from dealer
          </Text>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderCustomerItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{padding: 12, paddingRight: 0}}
          />
        </View>
        {/*  */}
      </View>
    </SafeAreaView>
  );
}
