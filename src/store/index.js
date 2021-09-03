import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import user from './user-slice';
import itemTypes from './itemTypes-slice';
import categories from './categories-slice';

const store = configureStore(
	{
		reducer: {
			user: user.reducer,
			itemTypes: itemTypes.reducer,
			categories: categories.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false })
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.getState();
export default store;
