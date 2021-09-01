import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchItemTypes } from '../redux/api';

const getItemTypes = createAsyncThunk(
	'inventory/getTypes',
	async () => await fetchItemTypes()
);

const initialItemTypeState = {
	itemTypes: []
};

const itemTypeSlice = createSlice({
	name: 'itemType',
	initialState: initialItemTypeState,
	reducers: {
		[getItemTypes.fulfilled]: (state, action) => {
			state.itemTypes = action.payload;
		}
	}
});

export const itemTypeActions = itemTypeSlice.actions;

export default itemTypeSlice.reducer;
