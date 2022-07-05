import React from 'react';
import './index.scss';

export function TodoLoading(props) {
	return (
		<li className='TodoItem--loading'>
			<div className="mask--loading">
				<div className="TodoItem-Content">
					<span className="TodoItem-toggle"></span>
					<p>Cargando TODOs</p>
					<span className='TodoItem-delete'>⛔</span>
				</div>
			</div>
		</li>
	);
}
