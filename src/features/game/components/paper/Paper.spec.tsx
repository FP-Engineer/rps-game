import { render } from '@testing-library/react';
import { Paper } from './Paper';

describe('Paper Test Suite', () => {

	it('renders without crashing.', () => {

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		render(<Paper handleClick={ () => {} } />);
	});
});