import React from 'react';
import './TodoSearch.scss';

export function TodoSearch() {
	const [searchValue, setSearchValue] = React.useState(''); // Hook: returns a value and a function to update it

	const onSearchValueChange = (e) => {
		setSearchValue(e.target.value);
		console.log(e.target.value);
	};

	return [
		<input
			type='search'
			placeholder='Buscar TODO'
			value={searchValue}
			onChange={onSearchValueChange}
		/>,
		<p>{searchValue}</p>,
	];
}
