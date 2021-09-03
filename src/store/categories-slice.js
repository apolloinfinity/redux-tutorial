import { createSlice } from '@reduxjs/toolkit';

import { getCategories } from './services';

const initialCategoryState = {
	categories: [],
	status: null
};

const categorySlice = createSlice({
	name: 'category',
	initialState: initialCategoryState,
	extraReducers: {
		[getCategories.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getCategories.fulfilled]: (state, { payload }) => {
			state.categories = payload.data;
		},
		[getCategories.failed]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
