export const initialState = {
	loading: false,
	moiveList: [],
	moiveDetail: null,
	errorMessage: null,
	pages: 1,
	searchWord: 'star'
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_MOVIES_REQUEST':
			return {
				...state,
				moiveList: action.payload || [],
				loading: true,
				errorMessage: null
			};

		case 'SEARCH_MOVIES_ADD_REQUEST':
			return {
				...state,
				loading: true,
				errorMessage: null
			};

		case 'SEARCH_MOVIES_SUCCESS':
			return {
				...state,
				moiveList: action.payload,
				pages: ++state.pages,
				loading: false
			};

		case 'SEARCH_MOVIES_FAILURE':
			return {
				...state,
				loading: false,
				errorMessage: action.error
			};

		case 'SET_SEARCH_WORD':
			return {
				...state,
				searchWord: action.payload
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
