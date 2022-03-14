import React from 'react';
import {TodoCreateButton} from '../TodoCreateButton';
import {TodoSearch} from '../TodoSearch';
import {TodoCounter} from '../TodoCounter';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';

export function AppUi() {
	const {error, loading, filteredTodos, toggleTodo, deleteTodo, openModal} =
		React.useContext(TodoContext);

	return (
		<div className='app'>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <p>Error: {error}</p>}
				{loading && <p>Loading...</p>}
				{!loading && !filteredTodos.length && <p>No todos found</p>}
				{filteredTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => toggleTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{openModal && (
				<Modal>
					<p>{filteredTodos[0]?.text}</p>
				</Modal>
			)}

			<TodoCreateButton />
		</div>
	);
}
