import React from 'react';
import './TodoCounter.scss';

export function TodoCounter({completed, total, loading}) {
	return (
		<h2 className={`${loading && 'TodoCounter--disabled'}`}>
			{completed === total
				? 'TODOs completados 🥳'
				: `Has completado ${completed} de ${total} tareas`}
		</h2>
	);
}
