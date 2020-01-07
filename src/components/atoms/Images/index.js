import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ src, alt = '', width, height, caption }) => {
	const srcm = src.replace('300.jpg', '450.jpg');
	const srcl = src.replace('300.jpg', '600.jpg');

	return (
		<ImageContainer>
			<Image srcSet={`${src} 1x, ${srcm} 1.5x, ${srcl} 2x`} src={src} alt={alt} width={width} height={height} />
			{caption && <figcaption>{figcaption}</figcaption>}
		</ImageContainer>
	);
};

const ImageContainer = styled.figure`
	margin: 0;
	width: 100%;
	min-height: 200px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export default Thumbnail;
