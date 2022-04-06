import React from 'react';
import './TodoForm.scss';

export function TodoForm({addTodo, setOpenModal}) {
	const [newTodoValue, setNewTodoValue] = React.useState('');

	const onChange = (e) => {
		setNewTodoValue(e.target.value);
	};

	const onCancel = () => {
		setNewTodoValue('');
		setOpenModal(false);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo(newTodoValue);
		setNewTodoValue('');
		setOpenModal(false);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Crea una nueva tarea</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder='Nueva tarea'
				cols={30}
			>
				{' '}
			</textarea>
			<div className=''>
				<button
					className='btn btn-negative'
					type='button'
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button className='btn btn-affirmative' type='submit'>
					Agregar
				</button>
			</div>
		</form>
	);
}
