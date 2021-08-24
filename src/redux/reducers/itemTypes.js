import { FETCH_TYPES } from '../constants/types';

// const itemTypes = [];

export const itemTypeReducer = (types = [], action) => {
	switch (action.type) {
		case FETCH_TYPES:
			return action.payload;
		default:
			return types;
	}
};
