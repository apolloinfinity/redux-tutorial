import { API } from './url';

export const authenticateUser = async (formData) => {
	return await API.post('/auth', formData);
};
