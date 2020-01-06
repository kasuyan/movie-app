export const initialState = {
	loading: false,
	moiveList: [],
	moiveDetail: null,
	errorMessage: null
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_MOVIES_REQUEST':
			return {
				...state,
				moiveList: action.payload,
				loading: true,
				errorMessage: null
			};

		case 'SEARCH_MOVIES_SUCCESS':
			return {
				...state,
				moiveList: action.payload,
				loading: false
			};

		case 'SEARCH_MOVIES_FAILURE':
			return {
				...state,
				loading: false,
				errorMessage: action.error
			};

		case 'GET_MOVIE_DETAIL_REQUEST':
			return {
				...state,
				moiveDetail: action.payload,
				loading: true,
				errorMessage: null
			};

		default:
			return {
				...state
			};
	}
};
