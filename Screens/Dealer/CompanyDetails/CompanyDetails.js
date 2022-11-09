import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import DropShadow from 'react-native-drop-shadow';
import {Image} from 'react-native';
import company from '../../../Assets/company-green.png';
import user from '../../../Assets/user.png';
import key from '../../../Assets/key.png';
import pin from '../../../Assets/pin.png';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {getUser} from '../../../API/userAPI';

export default function CompanyDetails() {
  const route = useRoute();
  const {companyId} = route?.params;

  const getUserData = async () => {
    try {
      const data = await getUser(companyId);
      setCompany(data);
    } catch (error) {}
  };

  const [companyData, setCompany] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView>
      {/* head */}
      <View className="mx-3 flex-row items-center justify-start space-x-3">
        <BackButton />
        <View>
          <Title text={'Company Details'} />
        </View>
      </View>
      {/* body */}
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.15,
          shadowRadius: 2,
        }}>
        <View className="rounded-lg mx-3 mt-5">
          <View className="p-3 bg-white rounded-lg">
            <View className="flex-row items-center justify-start space-x-3">
              <Image source={company} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">
                {companyData?.companyName}
              </Text>
            </View>
            <View className="flex-row items-center justify-start mt-3 space-x-3">
              <Image source={user} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">
                {companyData?.name}
              </Text>
            </View>
            <View className="flex-row items-center justify-start mt-3 space-x-3">
              <Image source={key} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">
                {companyData?.mobileNumber}
              </Text>
            </View>
            <View className="flex-row items-center justify-start mt-3 space-x-3">
              <Image source={pin} style={{height: 20, width: 20}} />
              <Text className="text-[#1C6758] font-semibold ">
                {companyData?.address}
              </Text>
            </View>
          </View>
        </View>
      </DropShadow>
    </SafeAreaView>
  );
}
