import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function FinishPickup() {
  const navigation = useNavigation();

  const submitHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View className="mx-3">
        {/* head */}
        <View className="flex-row items-center justify-start">
          <BackButton />
          <View className="ml-3">
            <Title text={'Finish Pickup'} />
          </View>
        </View>
        {/* body */}
        <Label text={'Customer Name'} />
        <Input />
        <Label text={'Product Type'} />
        <Input />
        <Label text={'Weight (Kg)'} />
        <Input type={'number-pad'} />
        <View className="mt-5">
          <ContainedButton submitHandler={submitHandler} text={'CONFIRM'} />
        </View>
      </View>
    </SafeAreaView>
  );
}
