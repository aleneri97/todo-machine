import React from 'react';
import './TodoCreateButton.scss';
import {TodoContext} from '../TodoContext';

export function TodoCreateButton() {
	const {openModal, setOpenModal} = React.useContext(TodoContext);

	const onClickButton = () => {
		setOpenModal(!openModal);
	};

	return (
		<button
			className={openModal && 'opened'}
			onClick={() => onClickButton()}
		>
			+
		</button>
	);
}
