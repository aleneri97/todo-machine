import React from 'react';
import './TodoList.scss';

export function TodoList(props) {
	return (
		<section className='TodoList-container'>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}
			{!props.loading && !props.todos.length && props.onEmpty()}
			{props.todos.map(props.render)}

			<ul>{props.children}</ul>
		</section>
	);
}
