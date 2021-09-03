import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9090' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('token')) {
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
	}
	return req;
});

export const getItemTypes = createAsyncThunk(
	'itemType/getTypes',
	async () => await API.get('/api/item-types')
);

export const getCategories = createAsyncThunk(
	'category/getCategories',
	async () => await API.get('/api/categories')
);

export const signIn = createAsyncThunk(
	'user/signIn',
	async (formData, { rejectWithValue }) => {
		try {
			const { data } = await API.post('/auth', formData);
			localStorage.setItem('token', data.token);
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error);
		}
	}
);

export const fetchUserByToken = createAsyncThunk('user/fetchUserByToken', async () => {});
