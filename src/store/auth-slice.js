import { createSlice } from '@reduxjs/toolkit';

import { signIn } from './services';

const initialLoginState = {
	user: {},
	isFetching: false
};

const loginSlice = createSlice({
	name: 'login',
	initialState: initialAuthState,
	extraReducers: {
		[signIn.pending]: (state, action) => {
			state.isFetching = true;
		},
		[signIn.fulfilled]: (state, { payload }) => {
			state.user = payload.data;
		}
	}
});
