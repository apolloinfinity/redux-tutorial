import { combineReducers } from 'redux';

import { categoryReducer as categories } from './categories';
import { itemTypeReducer as types } from './itemTypes';

export default combineReducers({
	categories,
	types
});
