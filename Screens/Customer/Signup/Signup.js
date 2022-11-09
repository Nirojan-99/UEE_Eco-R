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
import {register} from '../../../API/userAPI';
import {useState} from 'react';
import {useToast} from 'react-native-toast-notifications';

export default function Signup() {
  const navigation = useNavigation();
  const toast = useToast();

  const submitHandler = async () => {
    if (!name.toString().trim()) {
      return showErrorTost('Require valid name');
    }
    if (!email.toString().trim()) {
      return showErrorTost('Require valid email');
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
    if (!mobile_number || isNaN(mobile_number) === true) {
      return showErrorTost('Require valid mobile number');
    }
    if (!address.toString().trim()) {
      return showErrorTost('Require valid address');
    }

    const user = {
      name,
      email,
      password,
      mobileNumber: mobile_number,
      address,
      role: 'customer',
    };

    setPressed(true);
    const res = await submit(user)
      .then(res => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Customer'}],
        });
      })
      .catch(er => {
        setPressed(false);
      });
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

  //data
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  //state
  const [isPressed, setPressed] = useState(false);

  const submit = async data => {
    try {
      await register(data);
    } catch (error) {
      console.debug(error);
      return showErrorTost('Unable to register');
    }
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
              <Input value={email} set={setEmail} type={'email-address'}>
                <EnvelopeIcon color={'#1C6758'} />
              </Input>
            </View>
            {/* user name */}
            <View>
              <Label text={'User Name'} />
              <Input value={name} set={setUserName} type={'text'}>
                <UserIcon color={'#1C6758'} />
              </Input>
            </View>
            {/* contact number */}
            <View>
              <Label text={'Contact Number'} />
              <Input
                value={mobile_number}
                set={setMobileNumber}
                type={'number-pad'}>
                <PhoneIcon color={'#1C6758'} />
              </Input>
            </View>
            {/* address */}
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
            {/* password confirm */}
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
            <View className="my-4">
              <ContainedButton
                disabled={isPressed}
                text={'SUBMIT'}
                submitHandler={submitHandler}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
