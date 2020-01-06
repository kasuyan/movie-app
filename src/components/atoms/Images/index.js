import React from 'react';

const Thumbnail = ({ src, alt, width, height, caption }) => (
	<figure>
		<img src={src} alt={alt} width={width} height={height} />
		{caption && <figcaption>{figcaption}</figcaption>}
	</figure>
);

export default Thumbnail;
