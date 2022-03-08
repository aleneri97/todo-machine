import {TodoCreateButton} from '../TodoCreateButton';
import {TodoSearch} from '../TodoSearch';
import {TodoCounter} from '../TodoCounter';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import React from 'react';

export function AppUi(props) {
	return (
		<div className='app'>
			<TodoCounter completed={props.completed} total={props.total} />
			<TodoSearch
				searchValue={props.searchValue}
				setSearchValue={props.setSearchValue}
			/>
			<TodoList>
				{props.error && <p>Error: {props.error}</p>}
				{props.loading && <p>Loading...</p>}
				{!props.loading && !props.filteredTodos.length && (
					<p>No todos found</p>
				)}
				{props.filteredTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => props.toggleTodo(todo.text)}
						onDelete={() => props.deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<TodoCreateButton />
		</div>
	);
}
