import React from 'react';
import './TodoItem.scss';

export function TodoItem(props) {
	return (
		<li className='TodoItem'>
			<span
				className={`TodoItem-toggle ${
					props.completed && 'TodoItem-toggle--check'
				}`}
				onClick={props.onComplete}
			></span>
			<p className={`${props.completed && 'TodoItem-p--check'}`}>
				{props.text}
			</p>
			<span className='TodoItem-delete' onClick={props.onDelete}>
				⛔
			</span>
		</li>
	);
}
