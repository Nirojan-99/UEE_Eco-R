import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ContainedButton from '../../../Components/Button/ContainedButton';
import OutlinedButton from '../../../Components/Button/OutlinedButton';
import {useNavigation} from '@react-navigation/native';
import {ArrowLongRightIcon} from 'react-native-heroicons/solid';
import {useToast} from 'react-native-toast-notifications';
import {useState} from 'react';

export default function ManageVehicle() {
  const navigation = useNavigation();

  const submitHandler = () => {
    if (!vehicleType.toString().trim()) {
      return showErrorTost('Require valid type');
    }
    if (!color.toString().trim()) {
      return showErrorTost('Require valid color');
    }
    if (!vehicleNumber.toString().trim()) {
      return showErrorTost('Require valid vehicle number');
    }
    if (!chassisNumber || isNaN(chassisNumber) === true) {
      return showErrorTost('Require valid chassis number');
    }

    navigation.goBack();
  };

  //state
  const toast = useToast();

  const [vehicleType, setType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [chassisNumber, setChassis] = useState('');
  const [color, setColor] = useState('');

  const showErrorTost = msg => {
    toast.show(msg, {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  const manageDriver = () => {
    navigation.navigate('ManageDriver');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3 flex-row items-center justify-start space-x-3">
          <BackButton />
          <View>
            <Title text={'Vehicle'} />
          </View>
        </View>
        <View className="mx-3 mt-4">
          <View>
            <Label text={'Vehicle Type'} />
            <Input value={vehicleType} set={setType} />
            {/* TODO */}
          </View>
          <View>
            <Label text={'Vehicle Number'} />
            <Input value={vehicleNumber} set={setVehicleNumber} />
          </View>
          <View>
            <Label text={'Vehicle Color'} />
            <Input value={color} set={setColor} />
          </View>
          <View>
            <Label text={'Chassis Number'} />
            <Input value={chassisNumber} set={setChassis} />
          </View>
          <View className="my-4">
            <ContainedButton text={'SUBMIT'} submitHandler={submitHandler} />
          </View>
          <View className="my-4">
            <OutlinedButton
              submitHandler={manageDriver}
              right={true}
              text={'Manage Driver'}>
              <ArrowLongRightIcon color={'#1C6758'} />
            </OutlinedButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
