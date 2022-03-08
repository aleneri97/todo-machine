import React from 'react';
import './TodoCreateButton.scss';

export function TodoCreateButton() {
	const onClickButton = (msg) => {
		alert(msg);
	};

	return <button onClick={() => onClickButton('clicked')}>+</button>;
}
