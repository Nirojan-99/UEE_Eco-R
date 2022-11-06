import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Title from '../../../Components/Title/Title';
import ShadowGradientBG from '../../../Components/ShadowGradiendBG/ShadowGradientBG';
import productbg from '../../../Assets/product.png';
import dollar from '../../../Assets/dollar.png';
import weight from '../../../Assets/weight.png';
import company from '../../../Assets/company-green.png';
import vehicle from '../../../Assets/truck-g.png';
import pin from '../../../Assets/pin.png';
import {ListItem} from '@rneui/base';
import {ChevronDownIcon} from 'react-native-heroicons/solid';

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

  const [pickupExpanded, setPickupExpanded] = useState(false);

  return (
    <ListItem.Accordion
      style={{}}
      content={
        <>
          <ListItem.Content style={{borderRadius: 10}}>
            <ListItem.Title>
              <View className="flex-row items-center justify-start space-x-2">
                <Image source={productbg} style={{height: 20, width: 20}} />
                <View className="flex-col items-start ">
                  <Text className="font-semibold text-[#1C6758]">
                    Pickup Schedule
                  </Text>
                  <Text className=" text-gray-500">
                    12-12-2022 12.00 PM - 2.00 PM
                  </Text>
                </View>
              </View>
            </ListItem.Title>
          </ListItem.Content>
        </>
      }
      icon={<ChevronDownIcon color={'#1C6758'} />}
      isExpanded={pickupExpanded}
      onPress={() => {
        setPickupExpanded(pre => !pre);
      }}>
      <View className="bg-white mt-2">
        <View className="p-3 flex-col space-y-2 items-start">
          <View className="flex-row items-start space-x-3">
            <Image source={dollar} style={{height: 20, width: 20}} />
            <Text className="text-[#1C6758] font-semibold">200 per Kg</Text>
          </View>
          <View className="flex-row items-start space-x-3">
            <Image source={company} style={{height: 20, width: 20}} />
            <Text className="text-[#1C6758] font-semibold">ABC company</Text>
          </View>
          <View className="flex-row items-start space-x-3">
            <Image source={weight} style={{height: 20, width: 20}} />
            <Text className="text-[#1C6758] font-semibold">2 Kg</Text>
          </View>
          <View className="flex-row items-start space-x-3">
            <Image source={vehicle} style={{height: 20, width: 20}} />
            <Text className="text-[#1C6758] font-semibold">ABC 1234</Text>
          </View>
          <View className="flex-row items-start space-x-3">
            <Image source={pin} style={{height: 20, width: 20}} />
            <Text className="text-[#1C6758] font-semibold">Address</Text>
          </View>
        </View>
      </View>
    </ListItem.Accordion>
  );
};
