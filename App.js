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
import CustomerTab from './Screens/Customer/CustomerTab';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView className=" flex-1">
      <Gradient>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Customer"
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_bottom',
            }}>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="RegisterAs" component={RegisterAs} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="CustomerSignup" component={CustomerSignup} />
            <Stack.Screen name="Customer" component={CustomerTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </Gradient>
    </SafeAreaView>
  );
};

export default App;
