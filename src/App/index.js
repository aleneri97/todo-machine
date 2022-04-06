import React from 'react';
import './App.css';
import {TodoCreateButton} from '../TodoCreateButton';
import {TodoSearch} from '../TodoSearch';
import {TodoCounter} from '../TodoCounter';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoHeader} from '../TodoHeader';
import {useTodos} from './useTodos';

function App() {
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
		addTodo,
		setOpenModal,
	} = useTodos();

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
					<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}

			<TodoCreateButton
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		</div>
	);
}

export default App;
