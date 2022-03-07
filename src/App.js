import {TodoCreateButton} from './TodoCreateButton';
import {TodoSearch} from './TodoSearch';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import React from 'react';
import './App.css';

const todos = [
	{text: 'Cortar cebolla', completed: false},
	{text: 'Hacer la comida', completed: true},
	{text: 'Lavar los platos', completed: false},
];

function App(props) {
	return (
		<div className='app'>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todo) => (
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
