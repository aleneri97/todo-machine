import React from 'react';
import {withStorageListener} from './withStorageListener';

function ChangeAlert({show, toggleShow}) {
	if (show) {
		return <p>¿Hubo cambios?</p>;
	}
}

const ChangeAlertWithStorageAlert = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageAlert};
