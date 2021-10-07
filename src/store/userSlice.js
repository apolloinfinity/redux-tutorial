import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { authenticateUser } from '../services';

const initialUser = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: null;

const initialToken = localStorage.getItem('token')
	? JSON.parse(localStorage.getItem('token'))
	: null;

const initialUserState = {
	user: initialUser,
	isAuthenticated: initialToken,
	isFetching: false,
	isSuccess: false,
	isError: false,
	errorMessage: ''
};

export const signIn = createAsyncThunk('user', async (data, thunkAPI) => {
	try {
		const response = await authenticateUser(data);
		console.log(response.status);
		if (response.status === 200) {
			return response.data;
		} else {
			return thunkAPI.rejectWithValue(response.error);
		}
	} catch (error) {
		console.error({ Error: error.response.data });
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		clearState: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;

			return state;
		}
		// logOut: (state, history) => {
		// 	state.isAuthenticated = false;
		// 	localStorage.removeItem('user');
		// 	localStorage.removeItem('token');
		// 	history.push('/');
		// }
	},
	extraReducers: {
		[signIn.pending]: (state, action) => {
			state.isFetching = true;
			state.isAuthenticated = false;
		},
		[signIn.fulfilled]: (state, { payload }) => {
			console.log(payload);
			state.user = initialUser;
			state.isAuthenticated = true;
			state.isSuccess = true;
			state.isFetching = false;
			localStorage.setItem('user', JSON.stringify(payload.user));
			localStorage.setItem('token', JSON.stringify(payload.token));
		},
		[signIn.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.isAuthenticated = false;
			state.isSuccess = false;
			state.errorMessage = 'Wrong email or password';
		}
	}
});

export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;

export default userSlice;
