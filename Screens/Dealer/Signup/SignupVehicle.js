import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import {ArrowUpOnSquareIcon} from 'react-native-heroicons/solid';
import ContainedButton from '../../../Components/Button/ContainedButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {addVehicle} from '../../../API/vehicleAPI';

export default function SignupVehicle() {
  const navigation = useNavigation();
  const route = useRoute();

  // const {userId} = route?.params;
  const userId = '636a7bb8085cd8035a4a1eb5';

  const navigateImage = () => {
    navigation.navigate('ImageTake');
  };

  const navigateSubmit = async () => {
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
    if (!licenseNumber || isNaN(licenseNumber) === true) {
      return showErrorTost('Require valid license number');
    }
    if (!image.toString()) {
      return showErrorTost('Require valid image');
    }

    const vehicle = {
      userId,
      vehicleType,
      vehicleNumber,
      vehicleColor: color,
      chassisNumber: chassisNumber,
      licenceNumber: licenseNumber,
      licenceImage: image,
      driverId: userId,
    };

    setPressed(true);
    await submit(vehicle);
    setPressed(false);
  };

  // 636a7bb8085cd8035a4a1eb5

  const showErrorTost = msg => {
    toast.show(msg, {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      offset: 0,
      animationType: 'slide-in',
    });
  };

  //state
  const [isPressed, setPressed] = useState(false);
  const toast = useToast();

  const [vehicleType, setType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [chassisNumber, setChassis] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [image, setImage] = useState('image');
  const [color, setColor] = useState('');

  const submit = async data => {
    try {
      const res = await addVehicle(data);
      navigation.reset({
        index: 0,
        routes: [{name: 'Dealer'}],
      });
    } catch (error) {
      console.debug(error);
      return showErrorTost('Unable to register');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* head */}
        <View className="mx-3 flex-row items-center space-x-3">
          <BackButton />
          <View>
            <Title text={'Dealer Signup'} />
          </View>
        </View>
        {/* form */}
        <View className="mx-3 my-3">
          {/* type */}
          <View>
            <Label text={'Vehicle Type'} />
            <Input value={vehicleType} set={setType} />
          </View>
          {/* number */}
          <View>
            <Label text={'Vehicle Number'} />
            <Input value={vehicleNumber} set={setVehicleNumber} />
          </View>
          {/* color */}
          <View>
            <Label text={'Vehicle Color'} />
            <Input value={color} set={setColor} />
          </View>
          {/* chassis */}
          <View>
            <Label text={'Chassis Number'} />
            <Input value={chassisNumber} set={setChassis} type={'number-pad'} />
          </View>
          {/* license num */}
          <View>
            <Label text={'License Number'} />
            <Input
              value={licenseNumber}
              set={setLicenseNumber}
              type={'number-pad'}
            />
          </View>
          {/* license num */}
          <View>
            <Label text={'License Image'} />
            <ImageUploadButton onPress={navigateImage} text={'Upload'}>
              <ArrowUpOnSquareIcon color={'#1C6758'} />
            </ImageUploadButton>
          </View>
          {/* btn */}
          <View className="mt-5">
            <ContainedButton submitHandler={navigateSubmit} text={'SUBMIT'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
