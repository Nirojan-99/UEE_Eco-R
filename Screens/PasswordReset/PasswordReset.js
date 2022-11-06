import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import Title from '../../Components/Title/Title';
import Label from '../../Components/Label/Label';
import Input from '../../Components/Input/Input';
import ContainedButton from '../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function PasswordReset() {
  const navigation = useNavigation();

  const navigateOPT = () => {
    navigation.navigate('OTP');
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <ScrollView>
        {/* head */}
        <View className="flex-row items-center justify-start space-x-3 mx-3">
          <BackButton />
          <View>
            <Title text={'Password Recover'} />
          </View>
        </View>
        {/* body */}
        <View className="mx-3 my-3 mt-10">
          <Label text={'Email'} />
          <Input type={'email-address'} />
        </View>
        <View className="mx-3 mt-6">
          <ContainedButton submitHandler={navigateOPT} text={'SUBMIT'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
