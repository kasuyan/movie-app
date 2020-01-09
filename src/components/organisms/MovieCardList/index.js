import React from 'react';
import styled from 'styled-components';

import MovieCard from '../../molecules/MovieCard';

const MovieCardList = ({ data }) => {
	if (!data || !data.length) {
		return null;
	}

	return (
		<CardsList>
			{data.map((item) => {
				return (
					<CardListItem key={item.imdbID}>
						<MovieCard
							id={item.imdbID}
							title={item.Title}
							src={item.Poster}
							labels={[ item.Year, item.Type ]}
						/>
					</CardListItem>
				);
			})}
		</CardsList>
	);
};

const CardsList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	column-count: 2;
	min-width: 320px;
`;

const CardListItem = styled.li`
	list-style: none;
	margin: 0 0 0 1rem;
	width: calc(50% - 0.5rem);

	:nth-child(2n -1) {
		margin-left: 0;
	}
`;

export default MovieCardList;
