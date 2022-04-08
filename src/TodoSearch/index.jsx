import React from 'react';
import './TodoSearch.scss';

export function TodoSearch({searchValue, setSearchValue, loading}) {
	const onSearchValueChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<input
			disabled={loading}
			type='search'
			placeholder='Buscar TODO'
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}
