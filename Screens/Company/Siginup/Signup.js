import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';

//icons
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  BuildingOffice2Icon,
  LockClosedIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const navigation = useNavigation();

  const submitHandler = () => {
    navigation.navigate('Company');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="m-3">
          <Title text={'Company Signup'} />
          {/* form */}
          {/* email */}
          <View>
            <Label text={'Email'} />
            <Input type={'email-address'}>
              <EnvelopeIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* User name */}
          <View>
            <Label text={'User Name'} />
            <Input>
              <UserIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* contact number */}
          <View>
            <Label text={'Contact Number'} />
            <Input type={'number-pad'}>
              <PhoneIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* Company Name */}
          <View>
            <Label text={'Company Name'} />
            <Input>
              <BuildingOffice2Icon color={'#1C6758'} />
            </Input>
          </View>
          {/* Address */}
          <View>
            <Label text={'Address'} />
            <Input multiline={true} />
          </View>
          {/* password */}
          <View>
            <Label text={'Password'} />
            <Input type={'password'}>
              <LockClosedIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* password */}
          <View>
            <Label text={'Confirm Password'} />
            <Input type={'password'}>
              <LockClosedIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* btn */}
          <View className="mb-3 mt-5">
            <ContainedButton submitHandler={submitHandler} text={'SUBMIT'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
