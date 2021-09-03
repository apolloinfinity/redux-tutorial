import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9090' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem('profile')
		).token}`;
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
	'auth/signIn',
	async (data) => await API.post('/auth', data)
);
