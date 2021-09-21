import { createSlice } from '@reduxjs/toolkit';

import { getItemTypes } from '../services/services';

const initialItemTypeState = {
	itemTypes: [],
	status: null
};

const itemTypeSlice = createSlice({
	name: 'itemType',
	initialState: initialItemTypeState,
	extraReducers: {
		[getItemTypes.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getItemTypes.fulfilled]: (state, { payload }) => {
			state.itemTypes = payload.data;
		},
		[getItemTypes.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export const itemTypeActions = itemTypeSlice.actions;

export default itemTypeSlice;
