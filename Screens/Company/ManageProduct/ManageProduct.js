import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Title from '../../../Components/Title/Title';
import BackButton from '../../../Components/BackButton/BackButton';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';
import {ArrowUpTrayIcon} from 'react-native-heroicons/solid';

export default function ManageProduct() {
  const navigation = useNavigation();

  const pickImage = () => {
    navigation.navigate('ImageTake');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3">
          {/* head part */}
          <View className="flex-row items-center justify-start  ">
            <View className="mr-3">
              <BackButton />
            </View>
            <Title text={'Product'} />
          </View>
          {/* form */}
          <View className="mt-4">
            {/* product */}
            <View>
              <Label text={'Product'} />
              <Input />
            </View>
            {/* unit price */}
            <View>
              <Label text={'Unit Price'} />
              <Input type={'number-pad'} />
            </View>
            {/* description */}
            <View>
              <Label text={'Description'} />
              <Input multiline={true} />
            </View>
            {/* description */}
            <View>
              <Label text={'Cover Image'} />
              <ImageUploadButton onPress={pickImage} text="Upload">
                <ArrowUpTrayIcon color={'#1C6758'} size={30} />
              </ImageUploadButton>
            </View>
            {/* btn */}
            <View className="mt-5">
              <ContainedButton text={'SUBMIT'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
