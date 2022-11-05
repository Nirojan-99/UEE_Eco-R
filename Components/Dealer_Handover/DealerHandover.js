import {View, Text} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {Image} from 'react-native';
import user from '../../Assets/user.png';
import key from '../../Assets/key.png';
import pin from '../../Assets/pin.png';
import calendar from '../../Assets/calendar.png';
import clock from '../../Assets/clock.png';
import company from '../../Assets/company-green.png';
import delivery from '../../Assets/delivery.png';
import {TouchableOpacity} from 'react-native';

export default function DealerHandover() {
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
              <Image source={company} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                Company Name
              </Text>
            </View>
            <View className="flex-row mt-2 items-center justify-start space-x-2">
              <Image source={pin} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                Colombo 6
              </Text>
            </View>
            <View className="flex-row mt-2 items-center justify-start space-x-2">
              <Image source={user} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                User Name
              </Text>
            </View>
            <View className="flex-row mt-2 items-center justify-start space-x-2">
              <Image source={key} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                0778862172
              </Text>
            </View>
          </View>
          <View className="flex-1 p-2">
            <View className="flex-row items-center justify-start space-x-2">
              <Image source={delivery} style={{width: 20, height: 20}} />
              <Text className="text-[#1C6758] font-semibold " numberOfLines={1}>
                13213234
              </Text>
            </View>
          </View>
        </View>
      </View>
    </DropShadow>
  );
}
