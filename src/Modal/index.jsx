import ReactDOM from 'react-dom';
import './Modal.scss';

export function Modal({children}) {
	return ReactDOM.createPortal(
		<div className='ModalBackground'>{children}</div>,
		document.getElementById('modal')
	);
}
