import {View, Text} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import ShadowGradientBG from '../../../Components/ShadowGradiendBG/ShadowGradientBG';

export default function ConfirmPickup() {
  return (
    <View className="p-3">
      <Title text={'Confirmation'} />

      <ShadowGradientBG>
        <Text>fdd</Text>
      </ShadowGradientBG>
    </View>
  );
}
