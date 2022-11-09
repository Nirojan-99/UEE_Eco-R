import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import {ArrowUpOnSquareIcon} from 'react-native-heroicons/solid';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function ManageDriver() {
  const navigation = useNavigation();

  const submitHandler = () => {
    navigation.goBack();
  };
  
  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-start space-x-3 mx-3">
        <BackButton />
        <View>
          <Title text={'Driver'} />
        </View>
      </View>
      <View className="mx-3 mt-4">
        <View>
          <Label text={'Name'} />
          <Input />
        </View>
        <View>
          <Label text={'Contact Number'} />
          <Input type={'number-pad'} />
        </View>
        <View>
          <Label text={'NIC'} />
          <Input />
        </View>
        <View>
          <Label text={'License Number'} />
          <Input type={'number-pad'} />
        </View>
        <View>
          <Label text={'Upload image of licence'} />
          <ImageUploadButton text={'Upload'}>
            <ArrowUpOnSquareIcon color={'#1C6758'} />
          </ImageUploadButton>
        </View>
        <View className="my-5">
          <ContainedButton text={'SUBMIT'} submitHandler={submitHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
}
