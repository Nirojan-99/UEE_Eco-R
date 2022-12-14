import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import plasticImg from '../../Assets/plastic-img.png';
import dollar from '../../Assets/dollar.png';
import checked from '../../Assets/checked.png';
import requirement from '../../Assets/requirement.png';
import {PencilIcon, TrashIcon} from 'react-native-heroicons/solid';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import {deleteProduct} from '../../API/productAPI';

export default function CompanyProduct({onEdit, data, onLoaded}) {
  const width = Dimensions.get('screen').width;
  const hight = Dimensions.get('screen').height;

  const [open, setOpen] = useState(false);

  const Delete = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    try {
      await deleteProduct(data.id);
      onLoaded(pre => !pre);
      setOpen(false);
    } catch (error) {}
  };

  return (
    <View className={`mr-5 w-72 bg-[#fff] rounded-lg flex-col`} style={{}}>
      <DeleteConfirmation
        open={open}
        onClose={() => setOpen(false)}
        handleYes={onDelete}
      />
      <View>
        <Image
          source={plasticImg}
          style={{resizeMode: 'cover'}}
          className="w-72 h-44 rounded-t-lg"
        />
        {/* body */}
        <View className="flex-col p-2">
          <Text className="text-[#1C6758] text-lg font-bold">
            {data?.productName}
          </Text>
          {/* row 1 */}
          <View className="flex-row items-center justify-start mt-1">
            <Image
              source={dollar}
              style={{height: hight * 0.03, width: hight * 0.03}}
            />
            <Text className="text-gray-500 text-sm font-semibold ml-2">
              {data?.unitPrice} Rs per Kg
            </Text>
          </View>
          {/* row 2 */}
          <View className="flex-row items-center justify-start mt-1">
            <Image
              source={checked}
              style={{height: hight * 0.03, width: hight * 0.03}}
            />
            <Text className="text-gray-500 text-sm font-semibold ml-2">
              {data?.totalCollection} Kg collected
            </Text>
          </View>
          {/* row 3 */}
          <View className="flex-row items-center justify-start mt-1">
            <Image
              source={requirement}
              style={{height: hight * 0.03, width: hight * 0.03}}
            />
            <Text
              numberOfLines={1}
              className="text-gray-500 text-sm font-semibold ml-2">
              {data?.description}
            </Text>
          </View>
        </View>
        {/* footer */}
        <View className="bg-[#355764] w-full px-5 py-3 rounded-b-lg flex-row items-center justify-between">
          <TouchableOpacity activeOpacity={0.5} onPress={Delete}>
            <View className="bg-red-600 p-2 rounded-full flex-row items-center justify-between ">
              <TrashIcon color={'#fff'} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onEdit('product data')}>
            <View className=" bg-[#fff] p-2 rounded-full flex-row items-center justify-between">
              <PencilIcon color={'#333'} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
