/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

import stateReducer from './StateReducer';
import HomeScreen from './HomeScreen';  
import BedroomScreen from './BedroomScreen';
import LivingRoomScreen from './LivingRoomScreen';
import KitchenScreen from './KitchenScreen';
import BathroomScreen from './BathroomScreen';
import EndGameScreen from './EndGameScreen';
import WashHandsScreen from './WashHandsScreen';
import FinishScreen from './FinishScreen';

const Stack = createStackNavigator();
const store = createStore(stateReducer);

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen} />
            <Stack.Screen name = "Bedroom" component = {BedroomScreen} />
            <Stack.Screen name = "LivingRoom" component = {LivingRoomScreen} />
            <Stack.Screen name = "Kitchen" component = {KitchenScreen} />
            <Stack.Screen name = "Bathroom" component = {BathroomScreen} />
            <Stack.Screen name = "EndGame" component = {EndGameScreen} />
            <Stack.Screen name = "WashingHands" component = {WashHandsScreen} />
            <Stack.Screen name = "FinishScreen" component = {FinishScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};


export default App;
