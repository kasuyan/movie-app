import React, { useEffect, useState } from 'react';
import PageHeader from '../../atoms/Headers/PageHeader';
import MovieCard from '../../molecules/MovieCard';
import axios from 'axios';

const MOVIE_API_URL = 'http://www.omdbapi.com/?s=man&apikey=fad91d1e&page=1';

const TopPage = () => {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		console.log('didmount');
		axios.get(MOVIE_API_URL).then((jsonResponse) => {
			setData(jsonResponse.data.Search);
		});
		return () => {
			console.log('unmount');
		};
	}, []);

	return (
		<section>
			<PageHeader>Movie Searcher</PageHeader>
			{data.map((item) => {
				return (
					<MovieCard
						key={item.imdbID}
						id={item.imdbID}
						title={item.Title}
						src={item.Poster}
						labels={[ item.Year, item.Type ]}
					/>
				);
			})}
		</section>
	);
};

export default TopPage;
