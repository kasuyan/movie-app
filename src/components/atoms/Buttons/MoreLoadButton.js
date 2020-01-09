import React from 'react';
import styled from 'styled-components';
import SvgSpin from '../../../assets/svg/spinning-circles.svg';

const MoreLoadButton = ({ loading, onClick, children }) => {
	return <StyledButton onClick={onClick}>{loading ? <SVGImage src={SvgSpin} /> : children}</StyledButton>;
};

const StyledButton = styled.button`
	width: 100%;
	border: 2px solid #735c32;
	border-radius: 0.5rem;
	background-color: transparent;

	:hover {
		background-color: #d9bc66;
	}
`;

const SVGImage = styled.img`
	width: 2rem;
	hegiht: 2rem;
`;

export default MoreLoadButton;
