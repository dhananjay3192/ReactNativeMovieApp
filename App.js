// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React from 'react';

import WelcomeScreen from './Screens/WelcomeScreen';
import DetailScreen from './Screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Welcome to MovieApp' }}
      />
       <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Here are the details' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App