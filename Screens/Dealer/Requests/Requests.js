import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../../Components/Title/Title';
import {FlatList} from 'react-native';
import Request from '../../../Components/Requests/Request';
import {getSchedules} from '../../../API/scheduleAPI';

export default function Requests() {
  const [data, setData] = useState([]);

  const renderItem = ({item}) => {
    return (
      <View className="mb-3">
        <Request data={item} />
      </View>
    );
  };

  const fetchData = async () => {
    try {
      const data = await getSchedules();
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

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
