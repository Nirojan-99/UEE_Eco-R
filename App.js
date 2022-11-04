import React from 'react';
import {SafeAreaView} from 'react-native';
import Gradient from './Components/GaradientBG/Gradient';
import CustomerSignup from './Screens/Customer/Signup/Signup';
import CompanySignup from './Screens/Company/Siginup/Signup';
import DealerSignup from './Screens/Dealer/Signup/Signup';
import Login from './Screens/Login/Login';
import OTP from './Screens/OtpValidation/OTP';
import RegisterAs from './Screens/Register/RegisterAs';

//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CustomerTab from './Screens/Customer/CustomerTab';
import CompanyTab from './Screens/Company/CompanyTab';
import DealerTab from './Screens/Dealer/DealerTab';
import DealerSignupVehicle from './Screens/Dealer/Signup/SignupVehicle';
import TakeImage from './Screens/Company/TakeImage/TakeImage';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView className="flex-1">
      <Gradient>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Dealer"
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_bottom',
            }}>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="RegisterAs" component={RegisterAs} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="CustomerSignup" component={CustomerSignup} />
            <Stack.Screen name="CompanySignup" component={CompanySignup} />
            <Stack.Screen name="DealerSignup" component={DealerSignup} />
            <Stack.Screen
              name="DealerSignupVehicle"
              component={DealerSignupVehicle}
              options={{animation: 'fade_from_bottom'}}
            />
            <Stack.Screen
              name="ImageTake"
              options={{animation: 'fade_from_bottom'}}
              component={TakeImage}
            />
            <Stack.Screen name="Customer" component={CustomerTab} />
            <Stack.Screen name="Company" component={CompanyTab} />
            <Stack.Screen name="Dealer" component={DealerTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </Gradient>
    </SafeAreaView>
  );
};

export default App;
