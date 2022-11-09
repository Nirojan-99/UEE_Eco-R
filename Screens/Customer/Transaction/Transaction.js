import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import visa from '../../../Assets/visa.png';
import {Image} from 'react-native';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
import TransactionItem from '../../../Components/TransactionItem/TransactionItem';
import {TouchableOpacity} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import RenderIf from '../../../Components/RenderIf/RenderIf';
import {getUser} from '../../../API/userAPI';

export default function Transaction() {
  const width = Dimensions.get('screen').width;

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];

  const renderItem = ({item}) => {
    return <TransactionItem item={item} />;
  };

  const navigation = useNavigation();

  const editNavigate = () => {
    navigation.navigate('PaymentManage');
  };

  const addNavigate = () => {
    navigation.navigate('PaymentManage');
  };

  const [name, setName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [exMonth, setExMonth] = useState('');
  const [exYear, setExYear] = useState('');
  const [payment, setPayment] = useState('');

  useEffect(() => {
    fetchUser();
  }, [isFoucs]);

  const isFoucs = useIsFocused();

  const fetchUser = async () => {
    try {
      const data = await getUser('636b9961a8fcf06a3083d62e');
      const pay = data.payment;
      console.log(pay);
      setPayment(data.payment);
      setName(pay.nameOnCard);
      setCardNo(pay.cardNumber);
      setExYear(pay.expiryYear);
      setExMonth(pay.expiryMonth);
    } catch (error) {
      console.debug(error);
    }
  };

  return (
    <View className="mt-3 px-3 flex-1">
      {/* card */}
      <View>
        <RenderIf isTrue={payment?.nameOnCard !== undefined}>
          <>
            <DropShadow
              style={{
                shadowColor: '#222',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2,
              }}>
              <LinearGradient
                colors={['#EEF0F5', '#E6E9EF']}
                start={{x: -0.7, y: 1}}
                className="rounded-xl p-2 border-0">
                <View className="flex-row items-center justify-between">
                  <Text className="text-[#1C6758] font-semibold text-lg">
                    {name}
                  </Text>
                  <Image
                    source={visa}
                    className="w-14 h-14"
                    style={{resizeMode: 'center'}}
                  />
                </View>
                <View className="flex-row items-center justify-between my-3 mt-5">
                  <Text className="text-[#1C6758] font-semibold text-lg">
                    **** **** {cardNo?.split(4)}
                  </Text>
                  <Text className="text-[#1C6758] font-semibold text-lg">
                    {exMonth}/{exYear}
                  </Text>
                </View>
              </LinearGradient>
            </DropShadow>
            <View className="mt-4 flex-row justify-end">
              <View>
                <TouchableOpacity onPress={editNavigate}>
                  <Text className="text-gray-600 text-md font-semibold px-3 py-1  rounded-lg">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        </RenderIf>
        <RenderIf isTrue={payment?.nameOnCard === undefined}>
          <View className="mx-3 flex-row items-center justify-center my-7">
            <TouchableOpacity onPress={addNavigate}>
              <Text className=" px-5 py-1 bg-[#1C6758] rounded-sm font-semibold text-[17px] text-white">
                Add Card
              </Text>
            </TouchableOpacity>
          </View>
        </RenderIf>
      </View>
      {/* transaction sec */}
      <View className="mt-3 border-b pb-3 border-[#1C6758] ">
        <Text className="text-lg text-[#1C6758] font-semibold ">
          Transaction History
        </Text>
      </View>
      {/* list */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        className="mt-3"
      />
    </View>
  );
}
