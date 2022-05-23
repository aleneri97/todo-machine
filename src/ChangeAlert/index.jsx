import React from 'react';
import {useStorageListener} from './useStorageListener';

function ChangeAlert({sync}) {
	const { show, toggleShow } = useStorageListener(sync);
	if (show) {
		return (
			<div className="text-center">
				<p className="text-disabled">¡Hubo cambios!</p>
				<button className="btn-raised" onClick={() => toggleShow(false)}>Sincronizar</button>
			</div>
		);
	} else {
		return <></>;
	}
}

export { ChangeAlert };
