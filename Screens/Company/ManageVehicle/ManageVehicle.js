import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import OutlinedButton from '../../../Components/Button/OutlinedButton';
import {useNavigation} from '@react-navigation/native';
import {ArrowLongRightIcon} from 'react-native-heroicons/solid';

export default function ManageVehicle() {
  const navigation = useNavigation();

  const submitHandler = () => {
    navigation.goBack();
  };
  
  const manageDriver = () => {
    navigation.navigate('ManageDriver');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3 flex-row items-center justify-start space-x-3">
          <BackButton />
          <View>
            <Title text={'Vehicle'} />
          </View>
        </View>
        <View className="mx-3 mt-4">
          <View>
            <Label text={'Vehicle Type'} />
            <Input />
            {/* TODO */}
          </View>
          <View>
            <Label text={'Vehicle Number'} />
            <Input />
          </View>
          <View>
            <Label text={'Vehicle Color'} />
            <Input />
          </View>
          <View>
            <Label text={'Chassis Number'} />
            <Input />
          </View>
          <View className="my-4">
            <ContainedButton text={'SUBMIT'} submitHandler={submitHandler} />
          </View>
          <View className="my-4">
            <OutlinedButton
              submitHandler={manageDriver}
              right={true}
              text={'Manage Driver'}>
              <ArrowLongRightIcon color={'#1C6758'} />
            </OutlinedButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
