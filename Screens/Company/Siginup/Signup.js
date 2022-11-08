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
import {useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {register} from '../../../API/userAPI';

export default function Signup() {
  const navigation = useNavigation();

  const submitHandler = async () => {
    if (!email.toString().trim()) {
      return showErrorTost('Require valid email');
    }
    if (!name.toString().trim()) {
      return showErrorTost('Require valid name');
    }
    if (!password.toString().trim()) {
      return showErrorTost('Require valid password');
    }
    if (!confirm_password.toString().trim()) {
      return showErrorTost('Require valid password');
    }
    if (password !== confirm_password) {
      return showErrorTost("Passwords didn't match");
    }
    if (!mobileNumber || isNaN(mobileNumber) === true) {
      return showErrorTost('Require valid mobile number');
    }
    if (!address.toString().trim()) {
      return showErrorTost('Require valid address');
    }
    if (!companyName.toString().trim()) {
      return showErrorTost('Require valid company name');
    }

    const user = {
      name,
      email,
      password,
      mobileNumber: mobileNumber,
      address,
      companyName,
      role: 'company',
    };

    setPressed(true);
    const res = await submit(user);
    setPressed(false);
    
  };

  const showErrorTost = msg => {
    toast.show(msg, {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  //state
  const [isPressed, setPressed] = useState(false);
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobile] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const submit = async data => {
    try {
      await register(data);
      navigation.reset({
        index: 0,
        routes: [{name: 'Customer'}],
      });
    } catch (error) {
      console.debug(error);
      return showErrorTost('Unable to register');
    }
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
            <Input value={email} set={setEmail} type={'email-address'}>
              <EnvelopeIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* User name */}
          <View>
            <Label text={'User Name'} />
            <Input value={name} set={setName}>
              <UserIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* contact number */}
          <View>
            <Label text={'Contact Number'} />
            <Input value={mobileNumber} set={setMobile} type={'number-pad'}>
              <PhoneIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* Company Name */}
          <View>
            <Label text={'Company Name'} />
            <Input value={companyName} set={setCompanyName}>
              <BuildingOffice2Icon color={'#1C6758'} />
            </Input>
          </View>
          {/* Address */}
          <View>
            <Label text={'Address'} />
            <Input value={address} set={setAddress} multiline={true} />
          </View>
          {/* password */}
          <View>
            <Label text={'Password'} />
            <Input value={password} set={setPassword} type={'password'}>
              <LockClosedIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* password */}
          <View>
            <Label text={'Confirm Password'} />
            <Input
              value={confirm_password}
              set={setConfirmPassword}
              type={'password'}>
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
