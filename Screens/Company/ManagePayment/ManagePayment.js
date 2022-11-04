import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../Components/Input/Input';
import Label from '../../../Components/Label/Label';
import DropDownPicker from 'react-native-dropdown-picker';
import {TouchableWithoutFeedback} from 'react-native';
import {month, year} from '../../../Store/Date';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {ScrollView} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from 'react-native-heroicons/solid';

export default function ManagePayment() {
  const [monthOpen, setMonthOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [months, setMonth] = useState([...month]);
  const [years, setYear] = useState([...year]);

  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View className="mt-3 px-3 flex-1">
      {/* <ScrollView className="flex-1"> */}

      <TouchableWithoutFeedback
        className="bg-red-400"
        onPress={() => {
          setMonthOpen(false);
          setYearOpen(false);
        }}>
        <View className=" flex-1">
          {/* card holder */}
          <View>
            <Label text={'Card holder name'} />
            <Input />
          </View>
          {/* card number */}
          <View>
            <Label text={'Card number'} />
            <Input type={'number-pad'} />
          </View>
          {/* expiry */}
          <View className="flex-row items-center space-x-2">
            <View className="flex-1">
              <Label text={'Expiry Month'} />
              <DropDownPicker
                className="border-[#1C6758] border-2 bg-transparent"
                open={monthOpen}
                value={selectedMonth}
                items={months}
                setOpen={setMonthOpen}
                setValue={setSelectedMonth}
                setItems={setMonth}
                placeholderStyle={{
                  color: 'transparent',
                  fontWeight: 'bold',
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#fff',
                }}
              />
            </View>
            <View className="flex-1">
              <Label text={'Expiry Year'} />
              <DropDownPicker
                className="border-[#1C6758] border-2 bg-transparent"
                open={yearOpen}
                value={selectedYear}
                items={years}
                setOpen={setYearOpen}
                setValue={setSelectedYear}
                setItems={setYear}
                placeholderStyle={{
                  color: 'transparent',
                  fontWeight: 'bold',
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#fff',
                }}
              />
            </View>
          </View>
          {/* card holder */}
          <View>
            <Label text={'CVV'} />
            <Input type={'number-pad'} />
          </View>
          {/* submit */}
          <View className="mt-7">
            <ContainedButton submitHandler={navigateBack} text={'UPDATE'} />
          </View>
          <View className="mt-5  flex-row justify-end">
            <TouchableOpacity
              onPress={navigateBack}
              className="flex-row items-center space-x-1 border-[#333] border-2 py-1 px-2 rounded-3xl">
              <ArrowLeftCircleIcon color={'#222'} size={30} />
              <Text className="text-black font-semibold text-[15px]">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* </ScrollView> */}
    </View>
  );
}
