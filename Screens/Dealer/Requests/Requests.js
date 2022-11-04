import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../../Components/Title/Title';
import {FlatList} from 'react-native';
import Request from '../../../Components/Requests/Request';

export default function Requests() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const renderItem = () => {
    return (
      <View className="mb-3">
        <Request />
      </View>
    );
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="mx-3">
        <Title text={'Requests'} />
      </View>
      {/* body */}
      <View className="mx-3">
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 50}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
