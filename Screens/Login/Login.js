import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Input from '../../Components/Input/Input';
import {
  ArrowLongRightIcon,
  CheckIcon,
  LockClosedIcon,
  UserIcon,
} from 'react-native-heroicons/solid';
import ContainedButton from '../../Components/Button/ContainedButton';
import OutlinedButton from '../../Components/Button/OutlinedButton';
import {KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../API/userAPI';
import {useToast} from 'react-native-toast-notifications';

export default function Login() {
  const [checkBoxSelected, setCheckboxSelected] = useState(false);

  const checkBoxClick = () => {
    setCheckboxSelected(pre => !pre);
  };

  const submitHandler = async () => {
    if (!email.toString().trim()) {
      return showErrorTost('Require valid email');
    }
    if (!password.toString().trim()) {
      return showErrorTost('Require valid password');
    }

    var res = await login(email, password);
    res = res.role;
    console.debug(res);

    if (res === 'company') {
      navigation.reset({
        index: 0,
        routes: [{name: 'Company'}],
      });
    } else if (res === 'customer') {
      navigation.reset({
        index: 0,
        routes: [{name: 'Customer'}],
      });
    } else if (res === 'dealer') {
      navigation.reset({
        index: 0,
        routes: [{name: 'Dealer'}],
      });
    } else {
      return showErrorTost('Invalid credentials');
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

  const resetHandler = () => {
    navigation.navigate('PasswordReset');
  };

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View className="p-5 mt-20">
          <Text className="text-black text-3xl font-bold">Welcome Back,</Text>
          <View className="mt-7">
            {/* email */}
            <View className="mb-7">
              <Input
                value={email}
                set={setEmail}
                type="email-address"
                placeHolder="User Name">
                <UserIcon color={'#1C6758'} />
              </Input>
            </View>
            {/* password */}
            <View className="mb-5">
              <Input
                value={password}
                set={setPassword}
                type="password"
                placeHolder="Password">
                <LockClosedIcon color={'#1C6758'} />
              </Input>
            </View>
            {/*  */}
            <View className="flex-row items-center justify-between px-1">
              {/* checkbox */}
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={checkBoxClick}
                className="flex-row items-center space-x-2">
                <View
                  className={`w-4 h-4 border-2 border-[#1C6758] rounded-sm flex ${
                    checkBoxSelected && 'bg-[#1C6758]'
                  } items-center justify-center`}>
                  {checkBoxSelected && <CheckIcon color={'#fff'} size={15} />}
                </View>
                <Text className="text-black font-normal">Remember me</Text>
              </TouchableOpacity>
              {/* forget password */}
              <TouchableOpacity onPress={resetHandler}>
                <Text className="text-red-500 font-semibold">
                  Forget password?
                </Text>
              </TouchableOpacity>
            </View>
            {/* submit btn */}
            <View className="mt-5">
              <ContainedButton submitHandler={submitHandler} text="LOGIN" />
            </View>
            {/* register btn */}
            <View className="mt-10">
              <OutlinedButton
                right={true}
                text="Register"
                submitHandler={() => {
                  navigation.navigate('RegisterAs');
                }}>
                <ArrowLongRightIcon color={'#1C6758'} size={30} />
              </OutlinedButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
