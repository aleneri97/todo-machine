import React from 'react';

export function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
		const [storageChanged, setStorageChanged] = React.useState(false);

		return (
			<WrappedComponent
				show={storageChanged}
				toggleShow={setStorageChanged}
			/>
		);
	};
}
