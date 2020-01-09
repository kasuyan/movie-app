import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';

import PageHeader from '../../atoms/Headers/PageHeader';
import SearchBox from '../../molecules/SearchBox';
import MovieCardList from '../../organisms/MovieCardList';
import MoreLoadButton from '../../atoms/Buttons/MoreLoadButton';

import { initialState, reducer } from '../../store';
// const MOVIE_API_URL = 'http://www.omdbapi.com/?s=star&apikey=fad91d1e&page=1';
const MOVIE_API_URL = 'https://www.omdbapi.com/';

const TopPage = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	useEffect(() => {
		fetchData();

		return () => {
			console.log('unmount');
		};
	}, []);

	const search = (word) => {
		dispatch({
			type: 'SET_SEARCH_WORD',
			payload: word
		});

		fetchData(word);
	};

	const fetchData = (word = 'star') => {
		dispatch({
			type: 'SEARCH_MOVIES_REQUEST'
		});

		axios.get(`${MOVIE_API_URL}?s=${word}&page=1&apikey=fad91d1e`).then((res) => {
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

	const addData = () => {
		dispatch({
			type: 'SEARCH_MOVIES_ADD_REQUEST'
		});

		axios.get(`${MOVIE_API_URL}?s=${state.searchWord}&page=${state.pages}&apikey=fad91d1e`).then((res) => {
			if (res.data.Response === 'True') {
				dispatch({
					type: 'SEARCH_MOVIES_SUCCESS',
					payload: state.moiveList.concat(res.data.Search)
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
			{state.errorMessage && <p>{state.errorMessage}</p>}
			{!state.errorMessage && (
				<MoreLoadButton loading={state.loading} onClick={addData}>
					もっとみる
				</MoreLoadButton>
			)}
		</section>
	);
};

export default TopPage;
