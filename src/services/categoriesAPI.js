import { API } from './url';

export const fetchCategories = async () => {
	return await API.get('/api/categories');
};
