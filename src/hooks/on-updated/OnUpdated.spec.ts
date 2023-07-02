import { renderHook, act, RenderHookResult, Renderer } from '@testing-library/react-hooks';

import useOnUpdated from './OnUpdated';

describe('useOnUpdated test suite', () => {

	it('Should not be called without deps', () => {

		const callback = jest.fn();
		const hook = renderHook(() => useOnUpdated(callback));

		expect(callback).not.toHaveBeenCalled();

		act(() => {
			hook.rerender();
		});

		expect(callback).not.toHaveBeenCalled();

		act(() => {
			hook.unmount();
		});

		expect(callback).not.toHaveBeenCalled();
	});

	it('Should only be called if the referenced deps change', () => {

		let hook: RenderHookResult<{ value: string; }, void, Renderer<{ value: string; }>>;
		const callback = jest.fn();
		const initialProps = {value: 'initial'};
		const updatedProps = {value: 'updated'};

		act(() => {
			hook = renderHook((props) => useOnUpdated(callback, [props.value]), {
				initialProps,
			});
		});
    
		expect(callback).not.toHaveBeenCalled();

		act(() => {
			hook.rerender(initialProps);
		});

		expect(callback).not.toHaveBeenCalled();

		act(() => {
			hook.rerender(updatedProps);
		});
  
		expect(callback).toHaveBeenCalled();

		act(() => {
			hook.unmount();
		});

		expect(callback).toHaveBeenCalledTimes(1);
	});
});