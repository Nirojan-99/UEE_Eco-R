import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../../Components/Title/Title';
import {
  ArrowLongRightIcon,
  MagnifyingGlassCircleIcon,
} from 'react-native-heroicons/solid';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import CompanyProduct from '../../../Components/CompanyProduct/CompanyProduct';
import {getCompanyProduct} from '../../../API/productAPI';
import {useState} from 'react';
import {useEffect} from 'react';

export default function Products() {
  const navigation = useNavigation();

  const openSearch = () => {
    navigation.navigate('Search');
  };

  const addProduct = () => {
    navigation.navigate('ManageProducts');
  };

  const editProduct = product => {
    navigation.navigate('ManageProducts', {product});
  };
  const handleInsightClick = () => {
    navigation.navigate('Insights');
  };

  // const data = [1, 2, 3, 4, 5, 6, 7];
  const [data, setData] = useState([]);

  const renderItem = ({item}) => {
    return <CompanyProduct data={item} onEdit={editProduct} />;
  };

  const getProducts = async () => {
    const res = await getCompanyProduct();
    setData(res);
  };

  useEffect(() => {
    getProducts();
  }, [isFocus]);

  const isFocus = useIsFocused();

  const hight = Dimensions.get('screen').height;
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="">
          {/* header sce */}
          <View className="flex-row items-center justify-between mx-3">
            <Title text={'Products'} />
            <View>
              <TouchableOpacity onPress={openSearch} activeOpacity={0.5}>
                <MagnifyingGlassCircleIcon size={35} color={'#333'} />
              </TouchableOpacity>
            </View>
          </View>
          {/* products sec */}
          <View className="relative w-full mt-7" style={{height: hight * 0.52}}>
            <View className="bg-[#1C6758] w-1/2  rounded-br-[60px]  rounded-tr-md absolute top-0 left-0 bottom-0"></View>
            <View>
              <FlatList
                className="absolute top-0 left-0"
                data={data}
                renderItem={renderItem}
                // pagingEnabled={true}
                horizontal={true}
                contentContainerStyle={{
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  paddingRight: 0,
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View className="absolute bottom-0 left-0">
              <TouchableOpacity onPress={addProduct} className="mb-4 ml-5">
                <Text className="text-white font-semibold text-xl">
                  + Add New
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* view insights sec */}
          <View className="bg-white mt-5 py-6 ">
            <TouchableOpacity
              onPress={handleInsightClick}
              className="flex-row items-center justify-center ">
              <Text className="text-[#1C6758] mr-12 font-bold text-lg">
                View Insight
              </Text>
              <ArrowLongRightIcon size={40} color={'#1C6758'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
