import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '../services/index';

const initialCategoryState = {
	categories: [],
	status: null,
	error: null
};

export const getCategories = createAsyncThunk('categories', async () => {
	const response = await fetchCategories();
	// console.log(response.data);
	return response;
});

const categorySlice = createSlice({
	name: 'categories',
	initialState: initialCategoryState,
	extraReducers: {
		[getCategories.pending]: (state) => {
			state.status = 'loading';
		},
		[getCategories.fulfilled]: (state, { payload }) => {
			console.log(payload);
			state.categories = payload.data;
			state.status = 'success';
			state.error = false;
		},
		[getCategories.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.payload.error;
		}
	}
});

export const categoryActions = categorySlice.actions;
export const categorySelector = (state) => state.categories;

export default categorySlice;
