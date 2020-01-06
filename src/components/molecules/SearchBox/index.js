import React, { useState } from 'react';
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
		<form>
			<InpuText value={searchValue} onChange={onSetSearchValue} />
			<Button type="submit" onClick={onSearch}>
				検索
			</Button>
		</form>
	);
};

export default SearchBox;
