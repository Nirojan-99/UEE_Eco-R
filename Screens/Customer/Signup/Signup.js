import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import {
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from 'react-native-heroicons/solid';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const navigation = useNavigation();
  const submitHandler = () => {
    navigation.navigate('Customer');
  };
  return (
    <KeyboardAvoidingView behavior="height" className="mb-6">
      <ScrollView>
        <View className="p-5 mt-2">
          <Title text="Customer Signup" />
          {/* form */}
          <View className="mt-1">
            {/* email */}
            <View>
              <Label text={'Email'} />
              <Input type={'email-address'}>
                <EnvelopeIcon color={'#1C6758'} />
              </Input>
            </View>
            {/* user name */}
            <View>
              <Label text={'User Name'} />
              <Input type={'text'}>
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
            {/* address */}
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
            {/* password confirm */}
            <View>
              <Label text={'Confirm Password'} />
              <Input type={'password'}>
                <LockClosedIcon color={'#1C6758'} />
              </Input>
            </View>
            {/* btn */}
            <View className="my-4">
              <ContainedButton text={'SUBMIT'} submitHandler={submitHandler} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
