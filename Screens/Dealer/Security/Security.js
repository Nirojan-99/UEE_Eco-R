import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import pass from '../../../Assets/pass.png';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native';

export default function Security() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3 mt-5">
          <Label text={'Old Password'} />
          <Input type={'password'} />
        </View>
        <View className="mx-3 mt-1">
          <Label text={'New Password'} />
          <Input type={'password'} />
        </View>
        <View className="mx-3 mt-1">
          <Label text={'Confirm Password'} />
          <Input type={'password'} />
        </View>
        <View className="mx-3 mt-7">
          <ContainedButton text={'UPDATE'} submitHandler={() => {}} />
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
