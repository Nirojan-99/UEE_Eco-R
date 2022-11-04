import {View, Text} from 'react-native';
import React from 'react';
import Title from '../../../Components/Title/Title';
import AccountTabs from './AccountTabs';

export default function AccountScreen() {
  return (
    <View className="w-full flex-1 ">
      <View className="mx-3 mt-3 mb-1">
        <Title text={'Account'} />
      </View>
      <View className="flex-1">
        <AccountTabs />
      </View>
    </View>
  );
}
