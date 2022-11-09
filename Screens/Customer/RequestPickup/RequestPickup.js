import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../../../Components/BackButton/BackButton';
import {getProduct} from '../../../API/productAPI';
import {dateFormat} from '../../../Util/dateFormat';
import {timeFormat} from '../../../Util/timeForamt';
import {useToast} from 'react-native-toast-notifications';
import {addSchedule} from '../../../API/scheduleAPI';

export default function RequestPickup() {
  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [fromTimeOpen, setFromTimeOpen] = useState(false);
  const [toTimeOpen, setToTimeOpen] = useState(false);
  const [mode, setMode] = useState('date');

  const [product, setProduct] = useState({});

  const [unit, setUnit] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [address, setAddress] = useState('');

  //hook
  const navigation = useNavigation();

  const route = useRoute();

  const {productId} = route?.params;

  //submit handler
  const submitHandler = () => {
    if (!unit || isNaN(unit) === true) {
      return showErrorTost('Require valid units');
    }
    if (!selectedDate.toString().trim()) {
      return showErrorTost('Require valid date');
    }
    if (!fromTime.toString().trim()) {
      return showErrorTost('Require valid time range');
    }
    if (!endTime.toString().trim()) {
      return showErrorTost('Require valid time range');
    }
    if (!address.toString().trim()) {
      return showErrorTost('Require valid address');
    }

    const data = {
      productId: productId,
      from: address,
      companyId: '636b9b11a8fcf06a3083d62f',
      quantity: unit,
      date: dateFormat(selectedDate),
      time: timeFormat(fromTime) + ' - ' + timeFormat(endTime),
      customerId: '636b9961a8fcf06a3083d62e',
    };

    submitSchedule(data);
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

  const submitSchedule = async data => {
    try {
      const res = await addSchedule(data);
      if (res.id) {
        navigation.reset({
          index: 1,
          routes: [{name: 'Products'}, {name: 'Confirm'}],
        });
      }
    } catch (error) {}
  };

  const toast = useToast();

  const fetchData = async () => {
    const res = await getProduct(productId);
    setProduct(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <DatePicker
        modal
        mode={mode}
        open={dateOpen}
        date={date}
        onConfirm={date => {
          setDateOpen(false);
          setSelectedDate(date);
        }}
        onCancel={() => {
          setDateOpen(false);
        }}
      />
      <DatePicker
        modal
        mode={mode}
        open={fromTimeOpen}
        date={date}
        onConfirm={date => {
          setFromTimeOpen(false);
          setFromTime(date);
        }}
        onCancel={() => {
          setFromTimeOpen(false);
        }}
      />
      <DatePicker
        modal
        mode={mode}
        open={toTimeOpen}
        date={date}
        onConfirm={date => {
          setToTimeOpen(false);
          setEndTime(date);
        }}
        onCancel={() => {
          setToTimeOpen(false);
        }}
      />
      <ScrollView>
        <View className="p-3">
          {/* title */}
          <View className="flex-row items-center justify-start space-x-3 mb-1">
            <BackButton />
            <View>
              <Title text="Request Pickup" />
            </View>
          </View>
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
                  {' : '}
                  {product?.productName}
                </Text>
              </View>
              {/* product */}
              <View className="flex-row border-b pb-2 items-center border-[#1C6758]">
                <Text className="text-black font-semibold text-md">
                  Company
                </Text>
                <Text className="text-[#1C6758] text-md font-semibold flex-1">
                  {' : '}
                  {product?.companyName}
                </Text>
              </View>
              {/* product */}
              <View className="flex-row border-b pb-2 items-center border-[#1C6758]">
                <Text className="text-black font-semibold text-md">
                  Unit Price
                </Text>
                <Text className="text-[#1C6758] text-md font-semibold flex-1">
                  {' : '}
                  {product?.unitPrice} per Kg
                </Text>
              </View>
            </View>
            {/* form */}
            <View className="mt-3">
              {/* unit */}
              <View>
                <Label text="Available Units" />
                <Input value={unit} set={setUnit} />
              </View>
              {/* date */}
              <View>
                <Label text="Select Date" />
                <Input
                  value={dateFormat(selectedDate)} //TODO
                  right={true}
                  disable={false}
                  onClick={() => {
                    setMode('date');
                    setDateOpen(true);
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setDateOpen('date');
                      setDateOpen(true);
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
                    value={timeFormat(fromTime)}
                    onClick={() => {
                      setMode('time');
                      setFromTimeOpen(true);
                    }}
                    right={true}
                    disable={false}>
                    <TouchableOpacity
                      onPress={() => {
                        setMode('time');
                        setFromTimeOpen(true);
                      }}>
                      <ClockIcon color={'#1C6758'} />
                    </TouchableOpacity>
                  </TimeInput>
                </View>
                <View className="flex-1">
                  <TimeInput
                    value={timeFormat(endTime)}
                    onClick={() => {
                      setMode('time');
                      setToTimeOpen(true);
                    }}
                    right={true}
                    disable={false}>
                    <TouchableOpacity
                      onPress={() => {
                        setMode('time');
                        setToTimeOpen(true);
                      }}>
                      <ClockIcon color={'#1C6758'} />
                    </TouchableOpacity>
                  </TimeInput>
                </View>
              </View>
              {/* address */}
              <View>
                <Label text="Address" />
                <Input value={address} set={setAddress} multiline={true} />
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
    </SafeAreaView>
  );
}

const TimeInput = ({children, onClick, value}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View className="flex-row border-[#1C6758] border-2 rounded-lg p-2 items-center">
        <TextInput
          contextMenuHidden={true}
          placeholderTextColor={'#666'}
          className={`font-semibold w-11/12  text-lg p-0 text-[#1C6758]`}
          editable={false}
          value={value}
        />
        <View className="-ml-2">{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};
