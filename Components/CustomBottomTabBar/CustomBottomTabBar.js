import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import TabIcon from '../TabIcon/TabIcon';
import {Image} from 'react-native';

export default function CustomBottomTabBar({state, navigation, tabs}) {
  return (
    <View className="h-20  py-1 shadow px-5 flex-row  items-center m-0 justify-between">
      {state.routes.map((route, index) => {
        const label = route?.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            onLongPress={onLongPress}>
            <TabIcon focused={isFocused} label={label}>
              {IconRender(route.name, isFocused)}
            </TabIcon>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const IconRender = (route, isFocused) => {
  switch (route) {
    case 'Explore':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/explore-w.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/explore.png')}
            />
          )}
        </>
      );

    case 'Schedule':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/upcoming-w.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/upcoming.png')}
            />
          )}
        </>
      );

    case 'Account':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/user-w.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/user.png')}
            />
          )}
        </>
      );

    default:
      break;
  }
};
