import React from 'react';
import './TodoCounter.scss';
import {TodoContext} from '../TodoContext';

export function TodoCounter() {
	const {completed, total} = React.useContext(TodoContext);
	return (
		<h2>
			{completed === total
				? 'TODOs completados 🥳'
				: `Has completado ${completed} de ${total} tareas`}
		</h2>
	);
}
