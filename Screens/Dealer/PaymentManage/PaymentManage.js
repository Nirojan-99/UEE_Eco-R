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
import {useToast} from 'react-native-toast-notifications';
import {SafeAreaView} from 'react-native';
import {updatePayment} from '../../../API/userAPI';

export default function ManagePayment() {
  const [monthOpen, setMonthOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [months, setMonth] = useState([...month]);
  const [years, setYear] = useState([...year]);

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvv, setCVV] = useState('');

  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  const submitData = async data => {
    try {
      const res = await updatePayment(data, '636bf0cbcd1c7f330d3e48c3');
      if (res) {
        navigation.goBack();
      }
    } catch (error) {
      return showErrorTost('Unable to update');
    }
  };

  const submit = async () => {
    if (!cardHolder.toString().trim()) {
      return showErrorTost('Require valid holder name');
    }
    if (!cardNumber || isNaN(cardNumber) === true) {
      return showErrorTost('Require valid card number');
    }
    if (!selectedMonth || isNaN(selectedMonth) === true) {
      return showErrorTost('Require valid month');
    }
    if (!selectedYear || isNaN(selectedYear) === true) {
      return showErrorTost('Require valid year');
    }
    if (!cvv || isNaN(cvv) === true || cvv.length !== 3) {
      return showErrorTost('Require valid cvv');
    }

    const data = {
      nameOnCard: cardHolder,
      cardNumber: cardNumber,
      expiryMonth: selectedMonth,
      expiryYear: selectedYear,
      cvv: cvv,
    };

    await submitData(data);
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
    <SafeAreaView className="mt-3 px-3 flex-1">
      <ScrollView>
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
              <Input value={cardHolder} set={setCardHolder} />
            </View>
            {/* card number */}
            <View>
              <Label text={'Card number'} />
              <Input
                value={cardNumber}
                set={setCardNumber}
                type={'number-pad'}
              />
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
              <Input value={cvv} set={setCVV} type={'number-pad'} />
            </View>
            {/* submit */}
            <View className="mt-7">
              <ContainedButton submitHandler={submit} text={'UPDATE'} />
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
      </ScrollView>
    </SafeAreaView>
  );
}
