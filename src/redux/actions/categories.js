import { FETCH_CATEGORIES } from '../constants/types';
import * as api from '../api/';

export const getCategories = () => async (dispatch) => {
	try {
		const { data } = await api.fetchCategories();

		dispatch({ type: FETCH_CATEGORIES, payload: data });
	} catch (error) {
		console.error(error);
	}
};
