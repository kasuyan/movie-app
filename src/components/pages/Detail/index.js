import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import { initialState, reducer } from '../../store';
import PageHeader from '../../atoms/Headers/PageHeader';
import MovieDetail from '../../molecules/MovieDetail';
const MOVIE_API_URL = 'http://www.omdbapi.com/?apikey=fad91d1e';

const DetailPage = ({ match }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.get(`${MOVIE_API_URL}&i=${match.params.movieId}&plot=full`).then((res) => {
			dispatch({
				type: 'GET_MOVIE_DETAIL_REQUEST',
				payload: res.data
			});
		});
	}, []);

	if (!state.moiveDetail) {
		return null;
	}

	return (
		<section>
			<PageHeader>{state.moiveDetail.Title}</PageHeader>
			<MovieDetail props={state.moiveDetail} />
		</section>
	);
};

export default DetailPage;
