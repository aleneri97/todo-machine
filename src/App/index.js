import React from 'react';
import './App.css';
import {AppUi} from './AppUi';

function App() {
	const lsTodos = localStorage.getItem('todos_v1');

	let parsedTodos = [];

	if (!lsTodos) {
		localStorage.setItem('todos_v1', JSON.stringify([]));
	} else {
		parsedTodos = JSON.parse(lsTodos);
	}

	const [todos, setTodos] = React.useState(parsedTodos);
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

	const saveTodos = (newTodos) => {
		setTodos(newTodos);
		localStorage.setItem('todos_v1', JSON.stringify(newTodos));
	};

	const toggleTodo = (text) => {
		// Find the index of the todo (in the complete list)
		const index = todos.findIndex((todo) => todo.text === text);
		// Create a copy of the todos
		const newTodos = [...todos];
		// Update the todo at the index and toggle it
		newTodos[index].completed = !newTodos[index].completed;
		// Update the state
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		// Find the index of the todo (in the complete list)
		const index = todos.findIndex((todo) => todo.text === text);
		// Create a copy of the todos
		let newTodos = [...todos];
		// Update the todo at the index and toggle it
		newTodos.splice(index, 1);
		// Update the state
		saveTodos(newTodos);
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
