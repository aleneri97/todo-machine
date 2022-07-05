import React from 'react';

export function useLocalStorage(key, initialValue) {
	const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
	const { synchronizedItem, error, loading, item } = state;

	const onError = (error) => {
		dispatch({type: actionTypes.error, payload: error});
	};

	const onSuccess = (item) => {
		dispatch({type: actionTypes.success, payload: item});
	};

	const onSave = (item) => {
		dispatch({type: actionTypes.save, payload: item });
	};
	
	const onSync = () => {
		dispatch({type: actionTypes.sync });
	};

	React.useEffect(() => {
		setTimeout(() => {
			try {
				// Get the initial value from localStorage
				const lsItem = localStorage.getItem(key);
				// Parse the value from localStorage
				let parsedItem = initialValue;
				if (!lsItem) {
					// If there is no value in localStorage, set the initial value
					localStorage.setItem(key, JSON.stringify(initialValue));
				} else {
					// If there is a value in localStorage, parse it
					parsedItem = JSON.parse(lsItem);
				}
				// Update the state
				onSuccess(parsedItem);
			} catch (error) {
				onError(error);
			}
		}, 1000);
	}, [synchronizedItem]);

	const syncItems = () => {
		onSync();
	};

	// Update the value in localStorage and the state
	const saveItem = (newTodos) => {
		try {
			localStorage.setItem(key, JSON.stringify(newTodos));
			onSave(newTodos);
		} catch (error) {
			onError(error);
		}
	};

	return {item, saveItem, loading, error, syncItems};
}

const initialState = ({ initialValue }) => ({
	synchronizedItem: true,
	error: false,
	loading: true,
	item: initialValue,
});

const actionTypes = {
	error: 'ERROR',
	success: 'SUCCESS',
	save: 'SAVE',
	sync: 'SYNC'
};

const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
	},
	[actionTypes.success]: {
		...state,
		item: payload,
		loading: false,
		error: false,
		synchronizedItem: true,
	},
	[actionTypes.save]: {
		...state,
		item: payload
	},
	[actionTypes.sync]: {
		...state,
		synchronizedItem: false,
		loading: true,
	}
});

const reducer = (state, action) => {
	reducerObject(state, action.payload)[action.type] || state;
}