import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function Input({
  children,
  type,
  placeHolder,
  multiline,
  right,
  disable,
  onClick,
}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View className="flex-row border-[#1C6758] border-2 rounded-lg p-2 items-center">
        <>{!right && <View className="mr-2">{children}</View>}</>
        <TextInput
          secureTextEntry={type === 'password'}
          contextMenuHidden={true}
          keyboardType={type ?? ''}
          placeholder={placeHolder}
          placeholderTextColor={'#666'}
          className={`font-semibold ${
            right ? 'w-11/12 ml-2' : 'w-full'
          }  text-lg p-0 text-[#1C6758]  `}
          multiline={multiline === true}
          textAlignVertical={"top"}
          numberOfLines={multiline === true ? 4 : 1}
          editable={disable ?? true}
        />
        <View>{right && <View className="">{children}</View>}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}
