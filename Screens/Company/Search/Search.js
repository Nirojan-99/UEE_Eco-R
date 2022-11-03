import {View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function Search() {
  const navigation = useNavigation();

  //go back
  const back = () => {
    navigation.goBack();
  };

  const [products, setProducts] = useState([1, 2, 3, 4]);

  //   const renderItem = ({item}) => {
  //     return <Product onRequest={() => {}} />;
  //   };

  return (
    <View className="bg-white flex-1 mt-4 rounded-t-lg shadow-lg">
      {/* go back btn */}
      <View className="flex-row items-center justify-evenly">
        <TouchableOpacity onPress={back}>
          <ChevronDownIcon color={'#111'} size={30} />
        </TouchableOpacity>
      </View>
      {/* search box */}
      <View className="border-[#1C6758] px-[1px] py-[1px] flex-row border-2 mx-3 rounded-3xl mt-2">
        <TextInput
          className="text-black font-semibold  flex-1 p-0 pl-4 text-lg"
          size="small"
        />
        <TouchableOpacity>
          <MagnifyingGlassCircleIcon color={'#1C6758'} size={45} />
        </TouchableOpacity>
      </View>
      {/* result */}
      {/* <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingHorizontal: 12, marginVertical: 6}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="mt-2"
      /> */}
    </View>
  );
}
