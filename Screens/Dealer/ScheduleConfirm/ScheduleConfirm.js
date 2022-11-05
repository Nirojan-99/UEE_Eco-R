import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Input from '../../../Components/Input/Input';
import Label from '../../../Components/Label/Label';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function ScheduleConfirm() {
  const navigation = useNavigation();
  const submitHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3 flex-row items-center justify-start space-x-3">
          <BackButton />
          <View>
            <Title text="Finish Pickup" />
          </View>
        </View>
        {/* body */}
        <View className="mx-3 mt-3">
          <View>
            <Label text={'Customer Name'} />
            <Input />
          </View>
          <View>
            <Label text={'Product Type'} />
            <Input />
          </View>
          <View>
            <Label text={'Weight (Kg)'} />
            <Input type={'number-pad'} />
          </View>
          <View>
            <Label text={'Parcel ID'} />
            <Input />
          </View>
          <View className="mt-5 mb-2">
            <ContainedButton text={'CONFIRM'} submitHandler={submitHandler} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
