import {View, Text} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  const backNavigation = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={backNavigation}>
      <View className="bg-[#222] p-1 rounded-full flex-row items-center justify-center">
        <ChevronLeftIcon color={'#fff'} size={24} />
      </View>
    </TouchableOpacity>
  );
}
