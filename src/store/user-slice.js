import { createSlice } from '@reduxjs/toolkit';

import { signIn } from './services';

const initialUserState = {
	username: '',
	email: '',
	isFetching: false,
	isError: false,
	errorMessage: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	extraReducers: {
		[signIn.pending]: (state, action) => {
			state.isFetching = true;
		},
		[signIn.fulfilled]: (state, { payload }) => {
			state.user = payload.user.displayName;
			state.email = payload.user.email;
			state.isFetching = false;
		},
		[signIn.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload.error;
		}
	}
});

export const userActions = userSlice.actions;

export default userSlice;
