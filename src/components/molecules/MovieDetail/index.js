import React from 'react';
import Thumbnail from '../../atoms/Images';

const MovieDetail = ({ props }) => {
	console.log(props);
	return (
		<div>
			<Thumbnail src={props.Poster} />
			<p>{props.Plot}</p>
		</div>
	);
};

export default MovieDetail;
