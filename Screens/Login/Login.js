import {View, Text} from 'react-native';
import React from 'react';
import Input from '../../Components/Input/Input';
import {LockClosedIcon, UserIcon} from 'react-native-heroicons/solid';

export default function Login() {
  return (
    <View className="p-5 mt-20">
      <Text className="text-black text-3xl font-bold">Welcome Back,</Text>
      <View className="mt-7">
        {/* email */}
        <View className="mb-7">
          <Input type="email-address" placeHolder="User Name">
            <UserIcon color={'#1C6758'} />
          </Input>
        </View>
        {/* password */}
        <View className="mb-7">
          <Input type="password" placeHolder="Password">
            <LockClosedIcon color={'#1C6758'} />
          </Input>
        </View>
        {/*  */}
        <View className="flex-row items-center justify-between">
   
          {/* <Button color={'none'}>Forget Password</Button> */}
        </View>
      </View>
    </View>
  );
}
