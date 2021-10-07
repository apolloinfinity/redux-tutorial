import api from './url';

export const authenticateUser = async (formData) => {
	return await api.post('/auth', formData);
};

export const getToken = async () => {
	return localStorage.getItem('token') ? localStorage.getItem('token') : null;
};
