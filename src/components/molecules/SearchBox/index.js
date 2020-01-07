import React, { useState } from 'react';
import styled from 'styled-components';

import InpuText from '../../atoms/Forms/InpuText';
import Button from '../../atoms/Buttons/Button';

const SearchBox = ({ search }) => {
	const [ searchValue, setValue ] = useState('');

	const onSetSearchValue = (e) => {
		setValue(e.target.value);
	};

	const onSearch = (e) => {
		e.preventDefault();
		search(searchValue);
	};

	return (
		<Form>
			<InpuText value={searchValue} onChange={onSetSearchValue} />
			<Button type="submit" onClick={onSearch}>
				検索
			</Button>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	padding: 0.5rem;
	margin-bottom: 1rem;
	align-items: flex-start;

	background-color: #d9bc66;
	:focus-within {
		background-color: #f2a0b6;
	}
`;

export default SearchBox;
