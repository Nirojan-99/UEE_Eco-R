import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid';
import Product from './Product';
import {useNavigation} from '@react-navigation/native';

export default function Products() {
  // open search modal
  const openSearchModal = () => {
    navigation.navigate("Search")
  };

  //dummy data
  const data = [1, 2, 3, 4, 5, 6, 7];

  //hook
  const navigation = useNavigation();

  //request navigation
  const onRequest = ({product}) => {
    navigation.navigate('Request');
  };

  //render
  const renderProducts = ({item}) => {
    return <Product data={item} onRequest={onRequest} />;
  };

  return (
    <View>
      {/* title sec */}
      <View className="flex-row justify-between items-center mx-3">
        <Title text="Products" />
        <TouchableOpacity activeOpacity={0.6} onPress={openSearchModal}>
          <MagnifyingGlassCircleIcon color={'#333'} size={40} />
        </TouchableOpacity>
      </View>
      {/* body */}
      <FlatList
        data={data}
        renderItem={renderProducts}
        keyExtractor={(item, index) => index?.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12, paddingBottom: 60}}
      />
    </View>
  );
}
