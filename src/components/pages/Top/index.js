import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';

import PageHeader from '../../atoms/Headers/PageHeader';
import SearchBox from '../../molecules/SearchBox';
import MovieCardList from '../../organisms/MovieCardList';

import { initialState, reducer } from '../../store';
// const MOVIE_API_URL = 'http://www.omdbapi.com/?s=star&apikey=fad91d1e&page=1';
const MOVIE_API_URL = 'http://www.omdbapi.com/';

const TopPage = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.get(`${MOVIE_API_URL}?s=star&apikey=fad91d1e`).then((res) => {
			dispatch({
				type: 'SEARCH_MOVIES_REQUEST',
				payload: res.data.Search
			});
		});

		return () => {
			console.log('unmount');
		};
	}, []);

	const search = (word) => {
		dispatch({
			type: 'SEARCH_MOVIES_REQUEST'
		});

		axios.get(`${MOVIE_API_URL}?s=${word}&apikey=fad91d1e`).then((res) => {
			if (res.data.Response === 'True') {
				dispatch({
					type: 'SEARCH_MOVIES_SUCCESS',
					payload: res.data.Search
				});
			} else {
				dispatch({
					type: 'SEARCH_MOVIES_FAILURE',
					error: res.data.Error
				});
			}
		});
	};

	return (
		<section>
			<PageHeader>Movie Searcher</PageHeader>
			<SearchBox search={search} />
			<MovieCardList data={state.moiveList} />
		</section>
	);
};

export default TopPage;
