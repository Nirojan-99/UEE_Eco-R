import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Title from '../../../Components/Title/Title';
import BackButton from '../../../Components/BackButton/BackButton';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation} from '@react-navigation/native';
import {ArrowUpTrayIcon} from 'react-native-heroicons/solid';
import {useToast} from 'react-native-toast-notifications';
import {useState} from 'react';
import {addProducts} from '../../../API/productAPI';

export default function ManageProduct() {
  const navigation = useNavigation();

  const pickImage = () => {
    navigation.navigate('ImageTake');
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

  const [productName, setProductName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [description, setDescription] = useState('');

  const toast = useToast();

  const submit = async () => {
    if (!productName.toString().trim()) {
      return showErrorTost('Require valid product name');
    }
    if (!unitPrice || isNaN(unitPrice) === true) {
      return showErrorTost('Require valid unit price');
    }
    if (!description.toString().trim()) {
      return showErrorTost('Require valid description');
    }

    const data = {
      productName: productName,
      unitPrice: unitPrice,
      description: description,
      image:
        'https://www.rubicon.com/wp-content/uploads/2021/07/shutterstock_1555474487-scaled.jpg',
      totalCollection: 0,
      companyName: 'Asec company',
    };

    try {
      const res = await addProducts(data);

      if (res.unitPrice) {
        navigation.goBack();
      } else {
        return showErrorTost('Unable to add product');
      }
    } catch (error) {
      return showErrorTost('Unable to add product');
      // navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3">
          {/* head part */}
          <View className="flex-row items-center justify-start  ">
            <View className="mr-3">
              <BackButton />
            </View>
            <Title text={'Product'} />
          </View>
          {/* form */}
          <View className="mt-4">
            {/* product */}
            <View>
              <Label text={'Product'} />
              <Input value={productName} set={setProductName} />
            </View>
            {/* unit price */}
            <View>
              <Label text={'Unit Price'} />
              <Input value={unitPrice} set={setUnitPrice} type={'number-pad'} />
            </View>
            {/* description */}
            <View>
              <Label text={'Description'} />
              <Input
                value={description}
                set={setDescription}
                multiline={true}
              />
            </View>
            {/* description */}
            <View>
              <Label text={'Cover Image'} />
              <ImageUploadButton onPress={pickImage} text="Upload">
                <ArrowUpTrayIcon color={'#1C6758'} size={30} />
              </ImageUploadButton>
            </View>
            {/* btn */}
            <View className="mt-5">
              <ContainedButton submitHandler={submit} text={'SUBMIT'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
