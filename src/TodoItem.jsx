import React from 'react';
import './TodoItem.scss';

export function TodoItem(props) {
	const onComplete = () => {
		alert('TODO completado: ' + props.text);
	};

	const onDelete = () => {
		alert('TODO eliminado: ' + props.text);
	};

	return (
		<li className='TodoItem'>
			<span
				className={`TodoItem-toggle ${
					props.completed && 'TodoItem-toggle--check'
				}`}
				onClick={onComplete}
			></span>
			<p className={`${props.completed && 'TodoItem-p--check'}`}>
				{props.text}
			</p>
			<span className='TodoItem-delete' onClick={onDelete}>
				⛔
			</span>
		</li>
	);
}
