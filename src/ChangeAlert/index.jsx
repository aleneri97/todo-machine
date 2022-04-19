import React from 'react';
import {withStorageListener} from './withStorageListener';

function ChangeAlert({show, toggleShow}) {
	if (show) {
		return (
			<div>
				<p>¡Hubo cambios!</p>
				<button onClick={() => toggleShow(false)}>Sincronizar</button>
			</div>
		);
	} else {
		return <></>;
	}
}

const ChangeAlertWithStorageAlert = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageAlert};
