import React from 'react';
import {TodoCreateButton} from '../TodoCreateButton';
import {TodoSearch} from '../TodoSearch';
import {TodoCounter} from '../TodoCounter';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoHeader} from '../TodoHeader';

export function AppUi() {
	const {
		error,
		loading,
		filteredTodos,
		toggleTodo,
		deleteTodo,
		openModal,
		completed,
		total,
		searchValue,
		setSearchValue,
	} = React.useContext(TodoContext);

	return (
		<div className='app'>
			<TodoHeader>
				<TodoCounter completed={completed} total={total} />
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>
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
					<TodoForm />
				</Modal>
			)}

			<TodoCreateButton />
		</div>
	);
}
