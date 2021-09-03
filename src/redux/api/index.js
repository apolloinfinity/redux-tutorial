import axios from 'axios';

const API = axios.create({ baseURL: 'localhost:9090' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem('profile')
		).token}`;
	}
	return req;
});

export const fetchCategories = () => API.get('/api/categories');

export const fetchItemTypes = () => API.get('/api/item-types');
