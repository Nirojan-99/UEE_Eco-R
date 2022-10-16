import React from 'react';
import {SafeAreaView} from 'react-native';
import Gradient from './Components/GaradientBG/Gradient';
import Login from './Screens/Login/Login';

const App = () => {
  return (
    <SafeAreaView className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-1">
      <Gradient>
        <Login />
      </Gradient>
    </SafeAreaView>
  );
};

export default App;
