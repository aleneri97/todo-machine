import React from 'react';
import './App.css';
import {AppUi} from './AppUi';

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

	const toggleTodo = (text) => {
		// Find the index of the todo (in the complete list)
		const index = todos.findIndex((todo) => todo.text === text);
		// Create a copy of the todos
		const newTodos = [...todos];
		// Update the todo at the index and toggle it
		newTodos[index].completed = !newTodos[index].completed;
		// Update the state
		setTodos(newTodos);
	};

	const deleteTodo = (text) => {
		// Find the index of the todo (in the complete list)
		const index = todos.findIndex((todo) => todo.text === text);
		// Create a copy of the todos
		let newTodos = [...todos];
		// Update the todo at the index and toggle it
		newTodos.splice(index, 1);
		// Update the state
		setTodos(newTodos);
	};

	return (
		<AppUi
			completed={completedTodos}
			total={totalTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			filteredTodos={filteredTodos}
			toggleTodo={toggleTodo}
			deleteTodo={deleteTodo}
		/>
	);
}

export default App;
