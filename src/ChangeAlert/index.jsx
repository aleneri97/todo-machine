import React from 'react';
import {withStorageListener} from './withStorageListener';

function ChangeAlert({show, toggleShow}) {
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

const ChangeAlertWithStorageAlert = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageAlert};
