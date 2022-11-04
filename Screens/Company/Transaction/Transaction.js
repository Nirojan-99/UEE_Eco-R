import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native';
import TransactionItem from '../../../Components/TransactionItem/TransactionItem';

export default function Transaction() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];

  const renderItem = ({item}) => {
    return <TransactionItem color={'#fff'} item={item} />;
  };
  const renderDealerItem = ({item}) => {
    return <TransactionItem item={item} />;
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="h-1/2 bg-[#1C6758] flex-col">
        {/* head */}
        <View className="mt-3 mx-3 border-b  border-[#1C6758] ">
          <Text className="text-lg text-[#fff] font-semibold ">
            Transaction to Customer
          </Text>
        </View>
        {/* data */}
        <View className="flex-1 mx-3">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            className="mt-3"
            contentContainerStyle={{marginBottom: 35}}
          />
        </View>
      </View>
      <View className="h-1/2  ">
        {/* head */}
        <View className="mt-3 mx-3 flex-col">
          <Text className="text-lg text-[#1C6758] font-bold ">
            Transaction to Dealers
          </Text>
        </View>
        {/* data */}
        <View className="flex-">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderDealerItem}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            contentContainerStyle={{paddingHorizontal: 12, paddingBottom: 35}}
            className="mt-3"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
