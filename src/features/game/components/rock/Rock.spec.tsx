import { render } from '@testing-library/react';
import { Rock } from './Rock';

describe('Rock Test Suite', () => {

	it('renders without crashing.', () => {

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		render(<Rock handleClick={ () =>  {} }/>);
	});
});