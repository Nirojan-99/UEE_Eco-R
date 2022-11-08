import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid';
import Product from './Product';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';
import { getProducts } from '../../../API/productAPI';

export default function Products() {
  // open search modal
  const openSearchModal = () => {
    navigation.navigate('Search');
  };

  const [data, setData] = useState([]);

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

  const isFocus = useIsFocused();

  useEffect(() => {
    getAllProducts();
  }, [isFocus]);

  const getAllProducts = async () => {
    const data = await getProducts();
    setData(data);
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
