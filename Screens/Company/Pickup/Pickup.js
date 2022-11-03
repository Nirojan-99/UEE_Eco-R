import {View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import PickupRequest from '../../../Components/PickupRequest_Company/PickupRequest';

export default function Pickup() {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({item}) => {
    return (
      <View>
        <PickupRequest />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
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
