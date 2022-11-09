import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import user from '../../../Assets/user.png';
import ShadowInput from '../../../Components/ShadowInput/ShadowInput';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {getUser, updateUser} from '../../../API/userAPI';
import {useIsFocused} from '@react-navigation/native';

export default function Profile() {
  const [userName, setUserName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const submit = async () => {
    if (!userName.toString().trim()) {
      return showErrorTost('Require valid name');
    }
    if (!address.toString().trim()) {
      return showErrorTost('Require valid address');
    }
    if (!contact || isNaN(contact) === true) {
      return showErrorTost('Require valid mobile number');
    }
    await update();
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
  const showInfoTost = msg => {
    toast.show(msg, {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  const update = async () => {
    try {
      await updateUser(userName, contact, address, '636b9b11a8fcf06a3083d62f');
      setLoaded(pre => !pre);
      showInfoTost('Updated');
    } catch (error) {
      return showErrorTost('Unable to update');
    }
  };

  const fetchUser = async () => {
    try {
      const data = await getUser('636b9b11a8fcf06a3083d62f');
      console.debug(data);
      setUserName(data.name);
      setContact(data.mobileNumber);
      setAddress(data.address);
      setEmail(data.email);
      setLoaded(pre => !pre);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
  }, [isLoaded, isFocus]);

  const isFocus = useIsFocused();

  const [isLoaded, setLoaded] = useState(false);

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
              {email}
            </Text>
          </View>
          {/* body */}
          <View className="mx-3 mt-5">
            <ShadowInput text={userName} set={setUserName}></ShadowInput>
          </View>
          <View className="mx-3 mt-5">
            <ShadowInput
              text={contact?.toString()}
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
