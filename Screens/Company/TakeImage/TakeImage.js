import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import Title from '../../../Components/Title/Title';

export default function TakeImage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-3 flex-row items-center justify-start">
          <BackButton />
          <View className="ml-3">
            <Title text={'Upload Image'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
