import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { update_water } from './StateActions';
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

class LivingRoomScreen extends React.Component {

	render() {
		return (
		    <View style = {styles.container}>
		      	<ImageBackground source = {require('./images/living-room-scaled.png')} style = {styles.backgroundImage}>

			        <View style={styles.topMovement}>
			          <Text style={styles.controlText} 
			          	onPress={() => this.props.navigation.navigate('Bedroom')}> {'^'} </Text>
			        </View>

			        <View style={styles.rightMovement} justifyContent='flex-end'>
			          <Text style={styles.controlText} 
			          	onPress={() => this.props.navigation.navigate('EndGame')}> {'>'} </Text>
			        </View>

			        <View style={styles.leftMovement}>
			          <Text style={styles.controlText} 
			          	onPress={() => this.props.navigation.navigate('Kitchen')}> {'<'} </Text>
			        </View>
			        <TouchableOpacity style = {styles.waterBottle} 
		      			onPress={() => this.props.update_water()}>
				      	{
				        	this.props.currentState.water ? null :
				        	 <Image source = {require('./images/water-bottle-cutout.png')} style={styles.waterBottleImage} />
				      	}
				    </TouchableOpacity>
		      	</ImageBackground>		      
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
    alignItems: 'flex-end',
  },
  waterBottleImage: {
  	height: 90,
  	width: 45,
  },
});

const mapStateToProps = (state) => {
	const { currentState } = state;
	return { currentState };
};

const mapDispatchToProps = dispatch => (
	bindActionCreators({update_water}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LivingRoomScreen);