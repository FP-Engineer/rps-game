import { useEffect, useRef } from 'react';

export type Callback = () => void;

export default function useOnUpdated(callback: Callback, references: unknown[] = []) {

	const isMounted = useRef(false);

	useEffect(() => {

		if (isMounted.current) {
			callback();
		} else {
			isMounted.current = true;
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, references);
}