import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '../services/index';

const initialCategoryState = {
	categories: [],
	status: null,
	error: null
};

export const getCategories = createAsyncThunk('categories', async () => {
	const response = await fetchCategories();
	return response.data;
});

const categorySlice = createSlice({
	name: 'categories',
	initialState: initialCategoryState,
	extraReducers: {
		[getCategories.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getCategories.fulfilled]: (state, { payload }) => {
			state.categories = payload.data;
		},
		[getCategories.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
