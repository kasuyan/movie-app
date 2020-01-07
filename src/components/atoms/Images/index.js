import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ src, alt, width, height, caption }) => (
	<ImageContainer>
		<Image src={src} alt={alt} width={width} height={height} />
		{caption && <figcaption>{figcaption}</figcaption>}
	</ImageContainer>
);

const ImageContainer = styled.figure`margin: 0;`;

const Image = styled.img`width: 16rem;`;

export default Thumbnail;
