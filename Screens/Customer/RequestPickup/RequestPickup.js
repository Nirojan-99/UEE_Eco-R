import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Title from '../../../Components/Title/Title';
import {Image} from 'react-native';
import productbg from '../../../Assets/product-bg.png';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {KeyboardAvoidingView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native';

import {CalendarDaysIcon, ClockIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function RequestPickup() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('date');

  //hook
  const navigation = useNavigation();

  //submit handler
  const submitHandler = () => {
    // navigation.navigate('Confirm');
    navigation.reset({
      index: 1,
      routes: [{name: 'Products'}, {name: 'Confirm'}],
    });
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <DatePicker
        modal
        mode={mode}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <ScrollView>
        <View className="p-3">
          {/* title */}
          <Title text="Request Pickup" />
          {/* image */}
          <View className="relative">
            <Image source={productbg} className="w-full h-28" />
          </View>
          {/* data */}
          <View className="mt-3">
            <View className="flex-col space-y-2 items-start ">
              {/* product */}
              <View className="flex-row border-b pb-2 items-center border-[#1C6758]">
                <Text className="text-black font-semibold text-md">
                  Product
                </Text>
                <Text className="text-[#1C6758] text-md font-semibold flex-1">
                  {' : '}Used Plastic
                </Text>
              </View>
              {/* product */}
              <View className="flex-row border-b pb-2 items-center border-[#1C6758]">
                <Text className="text-black font-semibold text-md">
                  Company
                </Text>
                <Text className="text-[#1C6758] text-md font-semibold flex-1">
                  {' : '}ABC Company
                </Text>
              </View>
              {/* product */}
              <View className="flex-row border-b pb-2 items-center border-[#1C6758]">
                <Text className="text-black font-semibold text-md">
                  Unit Price
                </Text>
                <Text className="text-[#1C6758] text-md font-semibold flex-1">
                  {' : '}200 per Kg
                </Text>
              </View>
            </View>
            {/* form */}
            <View className="mt-3">
              {/* unit */}
              <View>
                <Label text="Available Units" />
                <Input />
              </View>
              {/* date */}
              <View>
                <Label text="Select Date" />
                <Input
                  right={true}
                  disable={false}
                  onClick={() => {
                    setMode('date');
                    setOpen(true);
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setMode('date');
                      setOpen(true);
                    }}>
                    <CalendarDaysIcon color={'#1C6758'} />
                  </TouchableOpacity>
                </Input>
              </View>
              {/* time */}
              <Label text="Select Time Range" />
              <View className="flex-row items-center space-x-2">
                <View className="flex-1">
                  <TimeInput
                    onClick={() => {
                      setMode('time');
                      setOpen(true);
                    }}
                    right={true}
                    disable={false}>
                    <TouchableOpacity
                      onPress={() => {
                        setMode('time');
                        setOpen(true);
                      }}>
                      <ClockIcon color={'#1C6758'} />
                    </TouchableOpacity>
                  </TimeInput>
                </View>
                <View className="flex-1">
                  <TimeInput
                    onClick={() => {
                      setMode('time');
                      setOpen(true);
                    }}
                    right={true}
                    disable={false}>
                    <TouchableOpacity
                      onPress={() => {
                        setMode('time');
                        setOpen(true);
                      }}>
                      <ClockIcon color={'#1C6758'} />
                    </TouchableOpacity>
                  </TimeInput>
                </View>
              </View>
              {/* address */}
              <View>
                <Label text="Address" />
                <Input multiline={true} />
              </View>
              {/* btn */}
              <View className="mt-4">
                <ContainedButton
                  submitHandler={submitHandler}
                  text={'SUBMIT'}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const TimeInput = ({children, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View className="flex-row border-[#1C6758] border-2 rounded-lg p-2 items-center">
        <TextInput
          contextMenuHidden={true}
          placeholderTextColor={'#666'}
          className={`font-semibold w-11/12  text-lg p-0 text-[#1C6758]`}
          editable={false}
        />
        <View className="-ml-2">{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};
