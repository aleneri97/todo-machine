import React from 'react';
import './TodoSearch.scss';
import {TodoContext} from '../TodoContext';

export function TodoSearch() {
	const {searchValue, setSearchValue} = React.useContext(TodoContext);

	const onSearchValueChange = (e) => {
		setSearchValue(e.target.value);
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
