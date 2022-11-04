import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import {ArrowUpOnSquareIcon} from 'react-native-heroicons/solid';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function SignupVehicle() {
  const navigation = useNavigation();

  const navigateImage = () => {
    navigation.navigate('ImageTake');
  };

  const navigateSubmit = () => {
    navigation.navigate('Dealer');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* head */}
        <View className="mx-3 flex-row items-center space-x-3">
          <BackButton />
          <View>
            <Title text={'Dealer Signup'} />
          </View>
        </View>
        {/* form */}
        <View className="mx-3 my-3">
          {/* type */}
          <View>
            <Label text={'Vehicle Type'} />
            <Input />
          </View>
          {/* number */}
          <View>
            <Label text={'Vehicle Number'} />
            <Input />
          </View>
          {/* color */}
          <View>
            <Label text={'Vehicle Color'} />
            <Input />
          </View>
          {/* chassis */}
          <View>
            <Label text={'Chassis Number'} />
            <Input type={'number-pad'} />
          </View>
          {/* license num */}
          <View>
            <Label text={'License Number'} />
            <Input type={'number-pad'} />
          </View>
          {/* license num */}
          <View>
            <Label text={'License Number'} />
            <ImageUploadButton onPress={navigateImage} text={'Upload'}>
              <ArrowUpOnSquareIcon color={'#1C6758'} />
            </ImageUploadButton>
          </View>
          {/* btn */}
          <View className="mt-5">
            <ContainedButton submitHandler={navigateSubmit} text={'SUBMIT'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
