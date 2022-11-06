import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import {ArrowUpOnSquareIcon, CameraIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function TakeImage() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView className="flex-1 flex-col">
      <ScrollView>
        {/* body */}
        <View className=" items-center justify-center mx-3  mt-10">
          <View className="my-2 flex-row">
            <ImageUploadButton onPress={onPress} text={'Upload'}>
              <ArrowUpOnSquareIcon color={'#1C6758'} />
            </ImageUploadButton>
          </View>
          <View className="my-2 flex-1 flex-row">
            <ImageUploadButton onPress={onPress} text={'Take'}>
              <CameraIcon color={'#1C6758'} />
            </ImageUploadButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
