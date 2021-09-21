import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { authenticateUser } from '../services';

// export const signIn = createAsyncThunk('user/signIn', async (formData) => {
// 	const { data } = await API.post('/auth', formData);
// 	console.log(data);
// 	localStorage.setItem('profile', JSON.stringify(data));
// 	// localStorage.setItem('token', data.token);
// 	// localStorage.setItem('user', data.user.display);
// 	return data;
// });

const initialUserState = {
	username: '',
	email: '',
	isFetching: false,
	isError: false,
	errorMessage: ''
};

export const signIn = createAsyncThunk('user', async (data) => {
	try {
		const response = await authenticateUser(data);
		console.log(response.status);
		if (response.status === 200) {
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			return response.data;
		} else {
			return new Error('Something went wrong');
		}
	} catch (error) {
		console.error({ Error: error.response.data });
	}
});

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
		[signIn.rejected]: (state) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = 'Wrong email or password';
		}
	}
});

export const userActions = userSlice.actions;
export const userSelector = (state) => state.user;

export default userSlice;
