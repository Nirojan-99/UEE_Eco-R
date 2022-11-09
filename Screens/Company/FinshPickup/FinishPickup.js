import {View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';

export default function FinishPickup() {
  const navigation = useNavigation();

  const submitHandler = () => {
    if (!customerName.toString().trim()) {
      return showErrorTost('Require valid customer name');
    }
    if (!product.toString().trim()) {
      return showErrorTost('Require valid product');
    }
    if (!weight.toString().trim() || isNaN(weight) === true) {
      return showErrorTost('Require valid weight');
    }
    navigation.goBack();
  };

  const toast = useToast();

  const showErrorTost = msg => {
    toast.show(msg, {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  const [customerName, setName] = useState('');
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <SafeAreaView>
      <View className="mx-3">
        {/* head */}
        <View className="flex-row items-center justify-start">
          <BackButton />
          <View className="ml-3">
            <Title text={'Finish Pickup'} />
          </View>
        </View>
        {/* body */}
        <Label text={'Customer Name'} />
        <Input value={customerName} set={setName} />
        <Label text={'Product Type'} />
        <Input value={product} set={setProduct} />
        <Label text={'Weight (Kg)'} />
        <Input value={weight} set={setWeight} type={'number-pad'} />
        <View className="mt-5">
          <ContainedButton submitHandler={submitHandler} text={'CONFIRM'} />
        </View>
      </View>
    </SafeAreaView>
  );
}
