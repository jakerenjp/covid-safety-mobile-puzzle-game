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

class HomeScreen extends React.Component {

	render() {
		const { navigation } = this.props.navigation;
  		return (
    	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      		<Button
        		title= "Start the Game"
        		onPress={() => this.props.navigation.navigate('Bedroom')}>
      		</Button>
    	</View>
  		);
	}
}

const mapStateToProps = (state) => {
	const { currentState } = state;
	return { currentState };
};

export default connect(mapStateToProps)(HomeScreen);