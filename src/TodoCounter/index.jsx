import React from 'react';
import './TodoCounter.scss';

export function TodoCounter({completed, total}) {
	return (
		<h2>
			{completed === total
				? 'TODOs completados 🥳'
				: `Has completado ${completed} de ${total} tareas`}
		</h2>
	);
}
