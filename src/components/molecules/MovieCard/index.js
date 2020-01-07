import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MovieHeader from '../../atoms/Headers/MovieHeader';
import Thumbnail from '../../atoms/Images';
import Label from '../../atoms/Labels';

const MovieCard = ({ title, id, src, labels }) => {
	return (
		<section>
			<Anchor to={`/detail/${id}`}>
				<MovieHeader>{title}</MovieHeader>
				{src && <Thumbnail src={src} />}
				{labels.map((item, i) => <Label key={`${i}-${item}`}>{item}</Label>)}
			</Anchor>
		</section>
	);
};

const Anchor = styled(Link)`
  color: #222;
  display: block;
  transition: background-color 0.2s linear 0s;

  :hover {
    background-color: #ddd;
  }

  :focus {
    box-shadow: rgba(139, 215, 186, 0.6) 0px 0px 0px 4px;
    outline: none;
  }

`;

export default MovieCard;
