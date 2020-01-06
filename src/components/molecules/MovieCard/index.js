import React from 'react';
import { Link } from 'react-router-dom';
import MovieHeader from '../../atoms/Headers/MovieHeader';
import Thumbnail from '../../atoms/Images';
import Label from '../../atoms/Labels';

const MovieCard = ({ title, id, src, labels }) => {
	return (
		<article>
			<Link to={`/detail/${id}`}>
				<MovieHeader>{title}</MovieHeader>
				{src && <Thumbnail src={src} />}
				{labels.map((item, i) => <Label key={`${i}-${item}`}>{item}</Label>)}
			</Link>
		</article>
	);
};

export default MovieCard;
