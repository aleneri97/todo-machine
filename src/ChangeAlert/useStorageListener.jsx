import React from 'react';

export function useStorageListener(sync) {
	const [storageChanged, setStorageChanged] = React.useState(false);

	window.addEventListener('storage', (change) => {
		if (change.key === 'todos_v1') {
			setStorageChanged(true);
		}
	});

	const toggleShow = () => {
		sync();
		setStorageChanged(false);
	};

	return {
		show: storageChanged,
		toggleShow
	}; 
}
