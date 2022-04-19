import React from 'react';

export function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
		const [storageChanged, setStorageChanged] = React.useState(false);

		window.addEventListener('storage', (change) => {
			if (change.key == 'todos_v1') {
				console.log('Hubo cambios');
				setStorageChanged(true);
			}
		});

		const toggleShow = () => {
			props.sync();
			setStorageChanged(false);
		};

		return (
			<WrappedComponent show={storageChanged} toggleShow={toggleShow} />
		);
	};
}
