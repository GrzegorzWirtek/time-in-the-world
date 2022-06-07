import React, { useState, useEffect } from 'react';

type ReturnType<T> = [
	T | undefined,
	React.Dispatch<React.SetStateAction<T | undefined>>,
];

export type useLocaleStorageType = {
	id: number;
	city: string;
	shift: number;
}[];

export const useLocalStorage = <T extends {}>(
	key: string,
	initialValue?: T,
): ReturnType<T> => {
	const [state, setState] = useState<T | undefined>(() => {
		if (!initialValue) return;
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	useEffect(() => {
		if (state) {
			try {
				localStorage.setItem(key, JSON.stringify(state));
			} catch (error) {
				console.log(error);
			}
		}
	}, [state, key]);
	return [state, setState];
};
