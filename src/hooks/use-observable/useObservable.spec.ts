import { BehaviorSubject, of } from 'rxjs';
import { renderHook } from '@testing-library/react';
import { useObservable } from './useObservalbe';

describe('useObservable Test Suite', () => {
	it('should return the event emitted by the observable', () => {
		const observable = of(42);
		const { result } = renderHook(() => useObservable(observable));
		
		expect(result.current).toBe(42);
	});

	it('should cleanup the subscription to the provided observable', async () => {
		const observable = new BehaviorSubject(42);
		const { result, unmount } = renderHook(() => useObservable(observable));
		
		expect(result.current).toBe(42);

		await unmount();
		observable.next(43);

		expect(result.current).toBe(42);
	});
});