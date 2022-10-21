import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import ShadowGradientBG from '../../../Components/ShadowGradiendBG/ShadowGradientBG';
import productbg from '../../../Assets/product-bg.png';

export default function Schedules() {
  const data = [1, 2, 3, 4, 5, 6];

  //render
  const renderItem = ({item}) => {
    return (
      <View className="my-2">
        <Schedule data={item} />
      </View>
    );
  };
  return (
    <View className="p-3">
      <Title text={'Schedule'} />
      <View className="my-3">
        <FlatList
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>
    </View>
  );
}

const Schedule = ({data}) => {
  const width = Dimensions.get('screen').width;

  return (
    <ShadowGradientBG>
      <View className="p-2">
        <View className="flex-row flex-wrap items-center justify-between space-x-2 space-y-2"></View>
      </View>
    </ShadowGradientBG>
  );
};
