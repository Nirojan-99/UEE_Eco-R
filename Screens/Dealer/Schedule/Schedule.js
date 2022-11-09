import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Title from '../../../Components/Title/Title';
import {ListItem} from '@rneui/base';
import {useState} from 'react';
import {ArrowDownIcon, ChevronDownIcon} from 'react-native-heroicons/solid';
import {FlatList} from 'react-native';
import DealerPickup from '../../../Components/Dealer_Pickup/DealerPickup';
import DealerHandover from '../../../Components/Dealer_Handover/DealerHandover';
import {getSchedulesOfDealer} from '../../../API/scheduleAPI';

export default function Schedule() {
  const [pickupExpanded, setPickupExpanded] = useState(false);
  const [handoverExpanded, setHandoverExpanded] = useState(false);

  const data = [1, 2, 3, 4, 5, 6];

  const RenderPickup = ({data}) => {
    return (
      <View className="">
        <DealerPickup data={data} />
      </View>
    );
  };

  const [pickUPData, setPickup] = useState([]);

  const fetchpickupdata = async () => {
    const data = await getSchedulesOfDealer('636bf0cbcd1c7f330d3e48c3');
    if (data.length > 0) {
      setPickup(data);
    }
  };

  useEffect(() => {
    fetchpickupdata();
  }, []);

  const RenderHandover = () => {
    return (
      <View className=" ">
        <DealerHandover />
      </View>
    );
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="mx-3">
          <Title text={'Schedule'} />
        </View>
        {/* body */}
        <View className="mx-3 mb-3">
          <ListItem.Accordion
            style={{}}
            content={
              <>
                <ListItem.Content style={{borderRadius: 10}}>
                  <ListItem.Title>
                    <Text className="font-semibold text-[#1C6758]">
                      Pickup Schedule
                    </Text>
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            icon={<ChevronDownIcon color={'#1C6758'} />}
            isExpanded={pickupExpanded}
            onPress={() => {
              setPickupExpanded(pre => !pre);
              setHandoverExpanded(false);
            }}>
            <View>
              {pickUPData?.map((item, index) => {
                return <RenderPickup key={index} data={item} />;
              })}
            </View>
          </ListItem.Accordion>
        </View>
        <View className="mx-3 ">
          <ListItem.Accordion
            content={
              <>
                <ListItem.Content style={{borderRadius: 10}}>
                  <ListItem.Title>
                    <Text className="font-semibold text-[#1C6758]">
                      Handover Schedule
                    </Text>
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            icon={<ChevronDownIcon color={'#1C6758'} />}
            isExpanded={handoverExpanded}
            onPress={() => {
              setHandoverExpanded(pre => !pre);
              setPickupExpanded(false);
            }}>
            <View>
              {data.map((item, index) => {
                return <RenderHandover key={index} />;
              })}
            </View>
          </ListItem.Accordion>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
