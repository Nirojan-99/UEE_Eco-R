import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import product from '../../Assets/product.png';
import company from '../../Assets/company-green.png';
import calendar from '../../Assets/calendar.png';
import clock from '../../Assets/clock.png';
import pin from '../../Assets/pin.png';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowRightCircleIcon} from 'react-native-heroicons/solid';
import {getProduct} from '../../API/productAPI';

export default function Request({data}) {
  const navigation = useNavigation();

  const navigateCompany = () => {
    navigation.navigate('CompanyDetails', {companyId: data.companyId});
  };
  const [product, setProduct] = useState();

  const getProductData = async id => {
    try {
      const data = await getProduct(id);
      console.debug(data);
      setProduct(data);
    } catch (error) {}
  };

  useEffect(() => {
    getProductData(data.productId);
  }, []);

  return (
    <View className="bg-white rounded-sm">
      <View className="flex-row p-3 items-start justify-between space-x-2">
        <View className="flex-1">
          <View className="flex-row items-center justify-start space-x-2">
            <Image source={product} style={{width: 20, height: 20}} />
            <Text className="text-[#1C6758] font-semibold ">
              {product?.productName}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigateCompany}
            activeOpacity={0.7}
            className="bg-slate-100 p-2 rounded-lg flex-row mt-2 items-center justify-start space-x-2">
            <Image source={company} style={{width: 20, height: 20}} />
            <Text className="text-[#1C6758] font-semibold ">
              {product?.companyName}{' '}
            </Text>
            <ArrowRightCircleIcon size={20} color={'#1C6758'} />
          </TouchableOpacity>
          <View className="flex-row items-center justify-start space-x-2"></View>
        </View>
        <View className="flex-1">
          <View className="flex-row items-center justify-start space-x-2">
            <Image source={pin} style={{width: 20, height: 20}} />
            <Text className="text-[#1C6758] font-semibold ">{data.from}</Text>
          </View>
          <View className="flex-row mt-2 items-center justify-start space-x-2">
            <Image source={calendar} style={{width: 20, height: 20}} />
            <Text className="text-[#1C6758] font-semibold ">{data.date}</Text>
          </View>
          <View className="flex-row mt-2 items-center justify-start space-x-2">
            <Image source={clock} style={{width: 20, height: 20}} />
            <Text className="text-[#1C6758] font-semibold ">{data.time}</Text>
          </View>
        </View>
      </View>
      {/* btn */}
      <View className="bg-[#1C6758] p-2 flex-row items-center justify-between rounded-b-sm">
        <TouchableOpacity>
          {/* <Text className="text-white font-semibold text-[15px]">Ignore</Text> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white font-semibold text-[15px]">
            Accept Pickup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
