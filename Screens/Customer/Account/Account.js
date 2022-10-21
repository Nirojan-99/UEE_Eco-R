import React from 'react';
import {View} from 'react-native';
import Title from '../../../Components/Title/Title';
import AccountTabs from './AccountTabs';

export default function Account() {
  return (
    <View className="w-full flex-1 p-3">
      <Title text={'Account'} />
      <AccountTabs />
    </View>
  );
}
