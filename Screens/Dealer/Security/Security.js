import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import pass from '../../../Assets/pass.png';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {updatePassword} from '../../../API/userAPI';

export default function Security() {
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const toast = useToast();

  const showErrorTost = msg => {
    toast.show(msg, {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  const showInfoTost = msg => {
    toast.show(msg, {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  const submit = async () => {
    if (!oldPassword.toString().trim()) {
      return showErrorTost('Require valid password');
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

    await update();
  };

  const update = async () => {
    try {
      const res = await updatePassword(password, '636bf0cbcd1c7f330d3e48c3');
      if (res) {
        setConfirmPassword('');
        setPassword('');
        setOldPassword('');
        showInfoTost('Updated');
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3 mt-5">
          <Label text={'Old Password'} />
          <Input value={oldPassword} set={setOldPassword} type={'password'} />
        </View>
        <View className="mx-3 mt-1">
          <Label text={'New Password'} />
          <Input value={password} set={setPassword} type={'password'} />
        </View>
        <View className="mx-3 mt-1">
          <Label text={'Confirm Password'} />
          <Input
            value={confirm_password}
            set={setConfirmPassword}
            type={'password'}
          />
        </View>
        <View className="mx-3 mt-7">
          <ContainedButton text={'UPDATE'} submitHandler={submit} />
        </View>
        <View>
          <Image
            className="w-full h-[200px] mt-7"
            source={pass}
            style={{resizeMode: 'contain'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
