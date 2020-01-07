import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, type = 'button' }) => {
	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	border: 2px solid #735c32;
	border-left: none;
	width: 20%;
	border-radius: 0 0.5rem 0.5rem 0;
	background-color: #d9bc66;
`;

export default Button;
