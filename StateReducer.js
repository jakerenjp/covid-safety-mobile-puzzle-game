import { combineReducers } from 'redux';

const INITIAL_STATE = {
	mask: false,
	water: false,
    food: false,
    washedHands: false,
};

const stateReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'WATER_BOTTLE':
			return { ...state, water: action.payload };
		case 'FACE_MASK':
			return { ...state, mask: action.payload };
		case 'COOK_FOOD':
			return { ...state, food: action.payload };
		case 'WASH_HANDS':
			return { ...state, washedHands: action.payload };
		default: 
			return state
	}
};

export default combineReducers({
	currentState: stateReducer,
});