import React from 'react';
import MovieCard from '../../molecules/MovieCard';

const MovieCardList = ({ data }) => {
	if (!data || !data.length) {
		return null;
	}

	return data.map((item) => {
		return (
			<MovieCard
				key={item.imdbID}
				id={item.imdbID}
				title={item.Title}
				src={item.Poster}
				labels={[ item.Year, item.Type ]}
			/>
		);
	});
};

export default MovieCardList;
