import { configureStore } from '@reduxjs/toolkit';

import itemTypes from './itemTypes-slice';
import categories from './categories-slice';

const store = configureStore(
	{
		reducer: {
			itemTypes: itemTypes.reducer,
			categories: categories.reducer
		}
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.getState();
export default store;
