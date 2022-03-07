import React from 'react';
import './TodoList.scss';

export function TodoList(props) {
	return (
		<section>
			<ul>{props.children}</ul>
		</section>
	);
}
