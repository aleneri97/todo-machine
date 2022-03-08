import {TodoCreateButton} from './TodoCreateButton';
import {TodoSearch} from './TodoSearch';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import React from 'react';
import './App.css';

const defaultTodos = [
	{text: 'Cortar cebolla', completed: false},
	{text: 'Bañar al león', completed: false},
	{text: 'Hacer la comida', completed: true},
	{text: 'Lavar los platos', completed: true},
];

function App(props) {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const cleanString = (str) =>
		str
			.trim()
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');

	let filteredTodos = todos;

	if (searchValue.length > 0) {
		filteredTodos = todos.filter((todo) =>
			cleanString(todo.text).includes(cleanString(searchValue))
		);
	}

	return (
		<div className='app'>
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<TodoList>
				{filteredTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<TodoCreateButton />
		</div>
	);
}

export default App;
