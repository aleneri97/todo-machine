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
import {TodoError} from '../TodoError';
import {TodoLoading} from '../TodoLoading';
import {TodoEmpty} from '../TodoEmpty';
import {TodoEmptyResult} from '../TodoEmptyResults';
import {ChangeAlertWithStorageAlert} from '../ChangeAlert';

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
		syncTodos,
	} = useTodos();

	return (
		<div className='app'>
			<TodoHeader loading={loading}>
				<TodoCounter completed={completed} total={total} />
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>
			<TodoList
				error={error}
				loading={loading}
				todos={filteredTodos}
				total={total}
				searchValue={searchValue}
				onError={() => <TodoError />}
				onLoading={() => <TodoLoading />}
				onEmpty={() => <TodoEmpty />}
				onEmptyResult={(search) => <TodoEmptyResult search={search} />}
			>
				{(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => toggleTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			</TodoList>

			<ChangeAlertWithStorageAlert sync={syncTodos} />

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
