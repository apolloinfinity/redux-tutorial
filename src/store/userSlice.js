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
	isSuccess: false,
	isError: false,
	errorMessage: ''
};

export const signIn = createAsyncThunk('user', async (data, thunkAPI) => {
	try {
		const response = await authenticateUser(data);
		console.log(response.status);
		if (response.status === 200) {
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user', JSON.stringify(response.data.user));
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
	},
	extraReducers: {
		[signIn.pending]: (state, action) => {
			state.isFetching = true;
		},
		[signIn.fulfilled]: (state, { payload }) => {
			state.username = payload.user.displayName;
			state.email = payload.user.email;
			state.isSuccess = true;
			state.isFetching = false;
		},
		[signIn.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.isSuccess = false;
			state.errorMessage = 'Wrong email or password';
		}
	}
});

export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;

export default userSlice;
