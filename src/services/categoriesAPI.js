import api from './url';

export const fetchCategories = async () => {
	return await api.get('/api/categories');
};
