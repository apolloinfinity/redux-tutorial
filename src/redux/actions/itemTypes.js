import { FETCH_ALL, FETCH_TYPES } from '../constants/types';
import * as api from '../api/';

export const getItemTypes = () => async (dispatch) => {
	try {
		const { data } = await api.fetchItemTypes();
		// dispatch({ type: FETCH_ALL, payload: { itemTypes: data } });
		dispatch({ type: FETCH_TYPES, payload: data });
	} catch (error) {
		console.error(error);
	}
};
