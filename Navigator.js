import React, { Component } from 'react';

import HomeScreen from './HomeScreen';  
import BedroomScreen from './BedroomScreen';
import LivingRoomScreen from './LivingRoomScreen';
import KitchenScreen from './KitchenScreen';
import BathroomScreen from './BathroomScreen';
import EndGameScreen from './EndGameScreen';
import WashHandsScreen from './WashHandsScreen';

import { StackNavigator } from 'react-navigation';

export const Navigator = new StackNavigator({
		Home: { screen: HomeScreen },
		Bedroom: { screen: BedroomScreen },
		LivingRoom: { screen: LivingRoomScreen },
		Kitchen: { screen: KitchenScreen },
		Bathroom: { screen: BathroomScreen },
		EndGame: { screen: EndGameScreen },
		WashingHands: { screen: WashHandsScreen },
	},
	{	
	  initialRouteName: 'Home',
	}
)

class Nav extends Component {
	render() {
		return (<Navigator />)
	}
}

export default Nav