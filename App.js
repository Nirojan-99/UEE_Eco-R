import React from 'react';
import {SafeAreaView} from 'react-native';
import Gradient from './Components/GaradientBG/Gradient';
import CustomerSignup from './Screens/Customer/Signup/Signup';
import Login from './Screens/Login/Login';
import OTP from './Screens/OtpValidation/OTP';
import RegisterAs from './Screens/Register/RegisterAs';

//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomerTab from './Screens/Customer/CustomerTab';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-1">
      <Gradient>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="RegisterAs" component={RegisterAs} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="CustomerSignup" component={CustomerSignup} /> */}
            <Stack.Screen name="Customer" component={CustomerTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </Gradient>
    </SafeAreaView>
  );
};

export default App;
