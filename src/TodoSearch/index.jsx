import React from 'react';
import './TodoSearch.scss';

export function TodoSearch({searchValue, setSearchValue}) {
	const onSearchValueChange = (e) => {
		setSearchValue(e.target.value);
		console.log(e.target.value);
	};

	return (
		<input
			type='search'
			placeholder='Buscar TODO'
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}
