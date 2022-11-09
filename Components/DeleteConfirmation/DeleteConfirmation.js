import {View, Text} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {TouchableOpacity} from 'react-native';

export default function DeleteConfirmation({open, onClose, handleYes}) {
  return (
    <Modal
      className="bg-black"
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        onClose();
      }}>
      <TouchableOpacity
        activeOpacity={1}
        delayPressIn={0}
        delayPressOut={0}
        // onPress={onClose}
        className="flex-1 justify-center items-center"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.53)'}}>
        <View className="bg-[#fff] p-4 px-8 rounded-lg mx-3 ">
          <Text className="text-red-600 mb-3 font-bold text-2xl">
            Confirmation
          </Text>
          <Text className="text-[#1C6758] text-lg ">
            Do you want to delete?
          </Text>
          <View className="flex-row items-center justify-end mt-3 mx-3">
            <TouchableOpacity onPress={onClose}>
              <Text className="text-red-600 text-[15px] font-semibold mr-8">
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleYes}>
              <Text className="text-black text-[15px] font-semibold">Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
