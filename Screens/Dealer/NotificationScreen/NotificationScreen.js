import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../../Components/Title/Title';
import {FlatList} from 'react-native';
import DealerPickup from '../../../Components/Dealer_Pickup/DealerPickup';

export default function NotificationScreen() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const renderItem = () => {
    return (
      <View>
        <DealerPickup />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View className="mx-3">
        <Title text={'Notifications'} />
      </View>
      {/*  */}
      <View className="mx-3 mt-3">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 120}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
