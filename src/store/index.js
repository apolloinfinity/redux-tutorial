import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import itemTypes from './itemTypes';

const store = configureStore(
	{
		reducer: {
			itemTypes
		}
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
