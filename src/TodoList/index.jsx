import React from 'react';
import './TodoList.scss';

export function TodoList(props) {
	return (
		<section className='TodoList-container'>
			{/* Error */}
			{props.error && props.onError()}
			{/* Loading */}
			{props.loading && props.onLoading()}
			{/* Empty (no data) */}
			{!props.loading &&
				!props.searchValue &&
				!props.total &&
				props.onEmpty()}
			{/* Empty result */}
			{!props.todos.length &&
				!!props.searchValue &&
				props.onEmptyResult(props.searchValue)}
			{/* Results */}
			{props.todos.map(props.render || props.children)}
		</section>
	);
}
