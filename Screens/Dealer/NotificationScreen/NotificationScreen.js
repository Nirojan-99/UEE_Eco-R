import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../../Components/Title/Title';
import {FlatList} from 'react-native';
import DealerPickup from '../../../Components/Dealer_Pickup/DealerPickup';
import {getSchedulesOfDealer} from '../../../API/scheduleAPI';

export default function NotificationScreen() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const renderItem = ({item}) => {
    return (
      <View>
        <DealerPickup data={item} />
      </View>
    );
  };

  const [pickUPData, setPickup] = useState([]);

  const fetchpickupdata = async () => {
    const data = await getSchedulesOfDealer('636bf0cbcd1c7f330d3e48c3');
    if (data.length > 0) {
      setPickup(data);
    }
  };

  useEffect(() => {
    fetchpickupdata();
  }, []);

  return (
    <SafeAreaView>
      <View className="mx-3">
        <Title text={'Notifications'} />
      </View>
      {/*  */}
      <View className="mx-3 mt-3">
        <FlatList
          data={pickUPData}
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
