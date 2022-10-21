import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabBG = isFocused ? '#1C6758' : 'rgba(255, 255, 255, 0)';
        const textColor = isFocused ? '#fff' : '#111';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
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
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{
              ...styles.tab,
              backgroundColor: tabBG,
            }}>
            <Text
              style={{color: textColor}}
              className="font-semibold text-[16px]">
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tab: {
    height: 28,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomTabBar;
