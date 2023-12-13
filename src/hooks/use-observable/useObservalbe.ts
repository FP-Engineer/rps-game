import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(observable: Observable<T>): T | undefined {
	const [event, sendEvent] = useState<T>();

	useEffect(() => {
		observable.subscribe(sendEvent);

		return () => {
			//subscribtion.unsubscribe();
		};
	}, [ observable ]);

	return event;
}