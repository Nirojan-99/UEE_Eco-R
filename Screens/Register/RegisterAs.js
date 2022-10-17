import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../../Components/Title/Title';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BuildingOffice2Icon,
  TruckIcon,
  UserIcon,
} from 'react-native-heroicons/solid';
import OutlinedButton from '../../Components/Button/OutlinedButton';
import {useNavigation} from '@react-navigation/native';

export default function RegisterAs() {

  const navigation = useNavigation();

  const clickHandler = screen => {
    navigation.navigate(screen);
  };

  return (
    <View className="p-5 mt-20">
      <Title text="Register As" />
      {/* btn */}
      <View>
        <ContainedButton submitHandler={clickHandler} text="Customer">
          <UserIcon color={'#fff'} />
        </ContainedButton>
        <ContainedButton submitHandler={clickHandler} text="Truck Owner">
          <TruckIcon color={'#fff'} />
        </ContainedButton>
        <ContainedButton submitHandler={clickHandler} text="Company User">
          <BuildingOffice2Icon color={'#fff'} />
        </ContainedButton>
      </View>
      {/* back btn */}
      <View className="mt-16">
        <OutlinedButton
          submitHandler={() => clickHandler('Login')}
          text="Login">
          <ArrowLongLeftIcon color={'#1C6758'} />
        </OutlinedButton>
      </View>
    </View>
  );
}

const ContainedButton = ({text, children, submitHandler}) => {
  return (
    <View className="my-[15px]">
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => submitHandler(text.split(' ')[0] + "Signup")}
        className="bg-[#1C6758] rounded-md p-2 flex-row items-center justify-between">
        <View>{children}</View>
        <Text
          className="font-bold text-white text-xl"
          style={{letterSpacing: 2}}>
          {text}
        </Text>

        <ArrowLongRightIcon color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};
