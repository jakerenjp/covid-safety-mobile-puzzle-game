import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { update_washedHands } from './StateActions';
import { bindActionCreators } from 'redux';
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

class WashHandsScreen extends React.Component {

  render() {
    return(
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.backgroundImage} 
        onPress={() => { this.props.update_washedHands(); this.props.navigation.navigate('Bathroom'); }}>
        <Image source = {require('./images/washing-hands-long.png')} />
      </TouchableOpacity>
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
  controlText: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  topText: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightText: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftText:{
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bottomMovement: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topMovement: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftMovement: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rightMovement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  waterBottle: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => {
  const { currentState } = state;
  return { currentState };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({update_washedHands}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WashHandsScreen);