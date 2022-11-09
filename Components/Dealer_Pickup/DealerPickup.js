import {View, Text} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import DropShadow from 'react-native-drop-shadow';
import {Image} from 'react-native';
import user from '../../Assets/user.png';
import key from '../../Assets/key.png';
import pin from '../../Assets/pin.png';
import calendar from '../../Assets/calendar.png';
import clock from '../../Assets/clock.png';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../../API/userAPI';
import {useState} from 'react';

export default function DealerPickup({data}) {
  const navigation = useNavigation();

  const finishPickup = () => {
    navigation.navigate('ScheduleConfirm');
  };

  const [customer, setCustomer] = useState();

  const customerData = async id => {
    try {
      const data = await getUser(id);
      console.debug(data);
      setCustomer(data);
    } catch (error) {
      console.debug(error);
    }
  };

  useEffect(() => {}, []);

  useLayoutEffect(() => {
    customerData(data.customerId);
  }, []);

  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      }}>
      <View className="rounded-md bg-white my-2">
        <View className="flex-1 flex-row items-start justify-between space-x-2">
          <View className="flex-1 p-2">
            <View className="flex-row items-center justify-start space-x-2">
              <Image source={user} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                {customer?.name}
              </Text>
            </View>
            <View className="flex-row mt-2 items-center justify-start space-x-2">
              <Image source={key} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                {customer?.mobileNumber}
              </Text>
            </View>
          </View>
          <View className="flex-1 p-2">
            <View className="flex-row items-center justify-start space-x-2">
              <Image source={pin} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                {data?.from}
              </Text>
            </View>
            <View className="flex-row mt-2 items-center justify-start space-x-2">
              <Image source={calendar} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                {data?.date}
              </Text>
            </View>
            <View className="flex-row mt-2 items-center justify-start space-x-2">
              <Image source={clock} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                {data?.time}
              </Text>
            </View>
          </View>
        </View>
        {/* btn */}
        <View className="bg-[#1C6758] p-2 flex-row rounded-b-sm justify-end">
          <TouchableOpacity onPress={finishPickup}>
            <Text className="text-white font-semibold">Finish Pickup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DropShadow>
  );
}
