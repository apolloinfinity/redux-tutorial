import { FETCH_CATEGORIES } from '../constants/types';

// const categories = [];

export const categoryReducer = (categories = [], action) => {
	switch (action.type) {
		case FETCH_CATEGORIES:
			return action.payload;
		default:
			return categories;
	}
};
