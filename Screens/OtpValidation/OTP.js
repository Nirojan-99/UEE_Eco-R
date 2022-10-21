import {View, Text} from 'react-native';
import React from 'react';
import Title from '../../Components/Title/Title';
import Input from '../../Components/Input/Input';
import ContainedButton from '../../Components/Button/ContainedButton';
import {TouchableOpacity} from 'react-native';

export default function OTP() {
  return (
    <View>
      <View className="p-5 mt-20">
        <Title text={'OTP Validation'} />
        {/* OTP */}
        <Text className="text-slate-400 mt-1">Check your mail</Text>
        <View className="mt-2">
          <Input type={"number-pad"}/>
        </View>
        <View className="flex-row justify-end mt-2">
          <TouchableOpacity activeOpacity={0.5}>
            <Text className="text-[#1C6758]">Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <ContainedButton text="SUBMIT" />
        </View>
      </View>
    </View>
  );
}
