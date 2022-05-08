import React from 'react';

export function useLocalStorage(key, initialValue) {
	// Return the parsed value and a function to update it
	const [synchronizedItem, setSynchronizedItem] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [item, setItem] = React.useState(initialValue);

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
				setItem(parsedItem);
				setSynchronizedItem(true);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 1000);
	}, [synchronizedItem]);

	const syncItems = () => {
		setLoading(true);
		setSynchronizedItem(false);
	};

	// Update the value in localStorage and the state
	const saveItem = (newTodos) => {
		try {
			localStorage.setItem(key, JSON.stringify(newTodos));
			setItem(newTodos);
		} catch (error) {
			setError(error);
		}
	};

	return {item, saveItem, loading, error, syncItems};
}
