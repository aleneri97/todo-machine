import React from 'react';
import './TodoCreateButton.scss';

export function TodoCreateButton({openModal, setOpenModal}) {
	const onClickButton = () => {
		setOpenModal(!openModal);
	};

	return (
		<button
			className={`btn-rounded ${openModal && 'opened'}`}
			onClick={() => onClickButton()}
		>
			+
		</button>
	);
}
