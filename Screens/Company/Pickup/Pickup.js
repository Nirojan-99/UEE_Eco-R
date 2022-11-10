import {View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import PickupRequest from '../../../Components/PickupRequest_Company/PickupRequest';

export default function Pickup() {
  const data = [1, 2, 3, 4];

  const renderItem = ({item}) => {
    return (
      <View>
        <PickupRequest />
      </View>
    );
  };
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        className="flex-1"
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{}}
      />
    </SafeAreaView>
  );
}
