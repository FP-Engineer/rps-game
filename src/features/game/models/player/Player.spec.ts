import { renderHook } from '@testing-library/react-hooks';
import { Choice } from '../../types';
import { usePlayer } from './Player';

describe('Player Test Suite', () => {

	it('should have initial choice as initial', () => {
		const hook = renderHook(() => usePlayer());
		const result = hook.result.current.choice;

		expect(result).toBe(Choice.initial);
	});

	it('should update choice state when choose() is called', () => {
		const hook = renderHook(() => usePlayer());

		expect(hook.result.current.choice).toBe(Choice.initial);

		hook.result.current.choose(Choice.rock);

		expect(hook.result.current.choice).toBe(Choice.rock);
	});
});
