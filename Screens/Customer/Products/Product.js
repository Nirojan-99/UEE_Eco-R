import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ShadowGradientBG from '../../../Components/ShadowGradiendBG/ShadowGradientBG';

import van from '../../../Assets/cargo-truck-g.png';
import checked from '../../../Assets/checked.png';
import company from '../../../Assets/company-green.png';
import dollar from '../../../Assets/dollar.png';
import product from '../../../Assets/product.png';
import productbg from '../../../Assets/product-bg.png';
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from 'react-native-heroicons/solid';

export default function Product({onRequest, data}) {
  return (
    <View className="my-3">
      <ShadowGradientBG>
        <View>
          <View className="flex-row space-x-2 items-start p-3 ">
            <View className="flex-1 flex-col space-y-2 items-start">
              {/* product name */}
              <View className="flex-row flex-1 space-x-2 items-center">
                <Image source={product} className="h-6 w-6" />
                <Text className="text-[#1C6758] font-semibold ">
                  {data.productName}
                </Text>
              </View>
              {/* product price */}
              <View className="flex-row flex-1 space-x-2 items-center">
                <Image source={dollar} className="h-6 w-6" />
                <Text className="text-[#1C6758] font-semibold ">
                  {data.unitPrice}Rs per Kg
                </Text>
              </View>
              {/* product company */}
              <View className="flex-row flex-1 space-x-2 items-center">
                <Image source={company} className="h-6 w-6" />
                <Text className="text-[#1C6758] font-semibold ">
                  {}
                </Text>
              </View>
              {/* product collection data */}
              <View className="flex-row flex-1 space-x-2 items-center">
                <Image source={checked} className="h-6 w-6" />
                <Text className="text-[#1C6758] font-semibold ">
                  {data.totalCollection} successful collections
                </Text>
              </View>
              {/* vehicle */}
              <View className="flex-row flex-1 space-x-2 items-center">
                <Image source={van} className="h-6 w-6" />
                <Text className="text-[#1C6758] font-semibold ">
                  Not available{' '}
                </Text>
              </View>
            </View>
            {/* img */}
            <View>
              <Image
                source={productbg}
                className="h-20 w-20 rounded-lg"
                style={{}}
              />
            </View>
          </View>
          {/* btn sec */}
          <View
            className="bg-[#1C6758] py-3 px-4 flex-row items-center justify-end"
            style={{borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
            <TouchableOpacity
              className="flex-row items-center space-x-2"
              onPress={onRequest}>
              <Text className="text-white font-semibold text-[15px]">
                Request Pickup
              </Text>
              <ArrowRightCircleIcon color={'#fff'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </ShadowGradientBG>
    </View>
  );
}
