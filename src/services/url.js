import axios from 'axios';
import { getToken } from '.';

const api = axios.create({ baseURL: 'http://10.0.20.101:9090' });

// api.interceptors.request.use((config) => {
// 	const token = getToken();
// 	if (token !== null) {
// 		config.headers['Authorization'] = `Bearer ${token}`;
// 	}
// 	return config;
// });

export default api;
