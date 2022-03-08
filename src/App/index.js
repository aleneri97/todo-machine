import React from 'react';
import './App.css';
import {AppUi} from './AppUi';

function useLocalStorage(key, initialValue) {
	// Get the initial value from localStorage
	const lsItem = localStorage.getItem(key);
	// Parse the value from localStorage
	let parsedItem = initialValue;
	if (!lsItem) {
		// If there is no value in localStorage, set the initial value
		localStorage.setItem(key, JSON.stringify(initialValue));
	} else {
		// If there is a value in localStorage, parse it
		parsedItem = JSON.parse(lsItem);
	}
	// Return the parsed value and a function to update it
	const [item, setItem] = React.useState(parsedItem);
	// Update the value in localStorage and the state
	const saveItem = (newTodos) => {
		setItem(newTodos);
		localStorage.setItem(key, JSON.stringify(newTodos));
	};

	return [item, saveItem];
}

function App() {
	const [todos, saveTodos] = useLocalStorage('todos_v1', []);
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
