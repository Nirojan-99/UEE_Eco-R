import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import {FlatList} from 'react-native';
import ProductInsight from '../../../Components/ProductInsight/ProductInsight';

export default function Insights() {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({item}) => {
    return (
      <View className="flex-1 mb-4">
        <ProductInsight data={item} />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      {/* head */}
      <View className="flex-row items-center justify-start mx-3">
        <BackButton />
        <View className="ml-3">
          <Title text="Insights" />
        </View>
      </View>
      {/* body */}
      <View className="ml-3 my-2 flex-col">
        <FlatList
          contentContainerStyle={{}}
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </SafeAreaView>
  );
}
