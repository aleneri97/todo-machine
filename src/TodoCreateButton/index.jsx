import React from 'react';
import './TodoCreateButton.scss';
import {TodoContext} from '../TodoContext';

export function TodoCreateButton() {
	const {setOpenModal} = React.useContext(TodoContext);

	const onClickButton = () => {
		setOpenModal(true);
	};

	return <button onClick={() => onClickButton()}>+</button>;
}
