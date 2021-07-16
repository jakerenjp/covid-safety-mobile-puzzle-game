import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
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
  TouchableOpacity,
} from 'react-native';

class FinishScreen extends React.Component {

  render() {
    return(
    <View style = {styles.container}>
      <Image source = {require('./images/congratulations-screen.png')} style = {styles.backgroundImage} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

const mapStateToProps = (state) => {
  const { currentState } = state;
  return { currentState };
};

export default connect(mapStateToProps)(FinishScreen);