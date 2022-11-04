import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import {
  DocumentIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from 'react-native-heroicons/solid';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('DealerSignupVehicle');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3">
          <Title text={'Dealer Signup'} />
        </View>
        <View className="mx-3 mt-4">
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
            <Input>
              <UserIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* contact */}
          <View>
            <Label text={'Contact Number'} />
            <Input type={'number-pad'}>
              <PhoneIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* NIC */}
          <View>
            <Label text={'NIC'} />
            <Input>
              <DocumentIcon color={'#1C6758'} />
            </Input>
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
          <View className="my-4">
            <ContainedButton submitHandler={handleNext} text={'NEXT'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
