import React from 'react';
import './TodoSearch.scss';

export function TodoSearch() {
	const onSearchValueChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<input
			type='search'
			placeholder='Buscar TODO'
			onChange={onSearchValueChange}
		/>
	);
}
