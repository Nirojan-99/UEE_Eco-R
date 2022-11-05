import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import ImageUploadButton from '../../../Components/Button/ImageUploadButton';
import {ArrowUpOnSquareIcon} from 'react-native-heroicons/solid';
import ContainedButton from '../../../Components/Button/ContainedButton';

export default function Vehicle() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="mx-3">
        <View>
          <Label text={'Vehicle Type'} />
          <Input />
        </View>
        <View>
          <Label text={'Vehicle Number'} />
          <Input />
        </View>
        <View>
          <Label text={'Vehicle Color'} />
          <Input />
        </View>
        <View>
          <Label text={'License Number'} />
          <Input type={'number-pad'} />
        </View>
        <View>
          <Label text={'Upload Image of Licence'} />
          <ImageUploadButton text={'Upload'}>
            <ArrowUpOnSquareIcon color={'#1C6758'} />
          </ImageUploadButton>
        </View>
        {/* btn */}
        <View className="my-4">
          <ContainedButton text={'UPDATE'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
