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
import {useToast} from 'react-native-toast-notifications';
import {register} from '../../../API/userAPI';
import {useState} from 'react';

export default function Signup() {
  const navigation = useNavigation();

  const handleNext = async () => {
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

    if (!NIC.toString().trim() || NIC.length !== 10) {
      return showErrorTost('Require valid NIC');
    }

    const user = {
      name,
      email,
      password,
      mobileNumber: mobileNumber,
      NIC,
      role: 'dealer',
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
  const [NIC, setNIC] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const submit = async data => {
    try {
      const res = await register(data);
      navigation.navigate('DealerSignupVehicle', {userId: res.id});
    } catch (error) {
      console.debug(error);
      return showErrorTost('Unable to register');
    }
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
            <Input value={email} set={setEmail} type={'email-address'}>
              <EnvelopeIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* user name */}
          <View>
            <Label text={'User Name'} />
            <Input value={name} set={setName}>
              <UserIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* contact */}
          <View>
            <Label text={'Contact Number'} />
            <Input value={mobileNumber} set={setMobile} type={'number-pad'}>
              <PhoneIcon color={'#1C6758'} />
            </Input>
          </View>
          {/* NIC */}
          <View>
            <Label text={'NIC'} />
            <Input value={NIC} set={setNIC}>
              <DocumentIcon color={'#1C6758'} />
            </Input>
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
          <View className="my-4">
            <ContainedButton submitHandler={handleNext} text={'NEXT'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
