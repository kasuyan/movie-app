import React from 'react';
import styled from 'styled-components';

const InputText = ({ value, onChange }) => {
	return <StyledInput type="text" value={value} onChange={onChange} />;
};

const StyledInput = styled.input`
	border: 2px solid #735c32;
	background-color: #d9bc66;
	border-radius: 0.5rem 0 0 0.5rem;
	height: 2rem;
	padding: 0 0.5rem;
	width: 80%;
	box-sizing: border-box;
`;

export default InputText;
