import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import user from '../../../Assets/user.png';
import ShadowInput from '../../../Components/ShadowInput/ShadowInput';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useToast} from 'react-native-toast-notifications';

export default function Profile() {
  const [userName, setUserName] = useState('User Name');
  const [contact, setContact] = useState(778862182);
  const [address, setAddress] = useState('alvai east');

  const submit = () => {
    if (!userName.toString().trim()) {
      return showErrorTost('Require valid name');
    }
    if (!address.toString().trim()) {
      return showErrorTost('Require valid address');
    }
    if (!contact || isNaN(contact) === true) {
      return showErrorTost('Require valid mobile number');
    }
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

  const toast = useToast();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mt-3">
          {/* img */}
          <View className="flex-row items-center justify-center">
            <View className="border-2 p-3 rounded-full border-[#1C6758]">
              <Image source={user} className="w-16 h-16 " />
            </View>
          </View>
          {/* email */}
          <View className="flex-row items-center justify-center">
            <Text className="text-[#1C6758] text-lg font-semibold ">
              email@gmail.com
            </Text>
          </View>
          {/* body */}
          <View className="mx-3 mt-5">
            <ShadowInput text={userName} set={setUserName}></ShadowInput>
          </View>
          <View className="mx-3 mt-5">
            <ShadowInput
              text={contact.toString()}
              set={setContact}></ShadowInput>
          </View>
          <View className="mx-3 mt-5">
            <ShadowInput
              multiline={true}
              text={address}
              set={setAddress}></ShadowInput>
          </View>
          <View className="mx-3 mt-7">
            <ContainedButton submitHandler={submit} text="UPDATE" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
