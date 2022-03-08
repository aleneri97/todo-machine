import React from 'react';
import './TodoCounter.scss';

export function TodoCounter({completed, total}) {
	return (
		<h2>
			Has completado {completed} de {total} TODOs
		</h2>
	);
}
