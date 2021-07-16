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
} from 'react-native';

class BathroomScreen extends React.Component {

	render() {
	    return (
	      <ImageBackground source = {require('./images/bathroom-scaled.png')} style = {styles.container}>

	        <View style={styles.rightMovement} justifyContent='flex-end'>
	          	<Text style={styles.controlText} onPress={() => this.props.navigation.navigate('Kitchen'/*,{
	        			Mask: this.state.mask,
	        			Water: this.state.water,
	        			Food: this.state.food,
	        			WashedHands: this.state.washedHands,
	        		}*/)}> {'>'} </Text>
	        </View>

	        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
	      		<Button
	        		title= "Wash hands?"
	        		onPress={() => this.props.navigation.navigate('WashingHands'/*,{
	        			Mask: this.state.mask,
	        			Water: this.state.water,
	        			Food: this.state.food,
	        			WashedHands: this.state.washedHands,
	        		}*/)}>
	      		</Button>
    		</View>

	      </ImageBackground>
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

export default connect(mapStateToProps)(BathroomScreen);