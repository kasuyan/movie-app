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
  color: #735C32;
  display: block;
  transition: background-color 0.2s linear 0s;
  padding: 0.5rem;

  :hover {
    background-color: #D9BC66;
  }


  :hover img,
  :focus img {
    transform: scale(1.1,1.1);
    transition-duration: 0.2s;
    opacity: 0.8;
    background-color: #000;
  }

  :focus {
    box-shadow: rgba(139, 215, 186, 0.6) 0px 0px 0px 4px;
    outline: none;
  }

`;

export default MovieCard;
