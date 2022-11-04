import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import TabIcon from '../TabIcon/TabIcon';
import {Image} from 'react-native';

export default function CustomBottomTabBar({state, navigation, tabs}) {
  return (
    <View
      className={`h-20  py-1 shadow  ${
        state.routes.length === 3 ? 'px-6' : 'px-3'
      } flex-row  items-center m-0 justify-between `}
      style={{shadowColor: '#333'}}>
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
            key={index}
            activeOpacity={0.7}
            onPress={onPress}
            onLongPress={onLongPress}>
            <TabIcon
              length={state.routes.length}
              focused={isFocused}
              label={label}>
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
    case 'Product':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/product-w.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/product.png')}
            />
          )}
        </>
      );
    case 'Vehicle':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/truck.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/truck-g.png')}
            />
          )}
        </>
      );
    case 'Requests':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/category-w.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/category.png')}
            />
          )}
        </>
      );
    case 'Notification':
      return (
        <>
          {isFocused ? (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/alarm-w.png')}
            />
          ) : (
            <Image
              className="w-8 h-8"
              source={require('../../Assets/alarm.png')}
            />
          )}
        </>
      );

    default:
      break;
  }
};
