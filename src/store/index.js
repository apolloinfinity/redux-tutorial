import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';
// import itemTypes from './itemTypesSlice';
import categories from './categoriesSlice';

const store = configureStore(
	{
		reducer: {
			user: user.reducer,
			// itemTypes: itemTypes.reducer,
			categories: categories.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false })
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.getState();
export default store;
