import { render } from '@testing-library/react';
import { Scissors } from './Scissors';

describe('Scissors Test Suite', () => {

	it('renders without crashing.', () => {

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		render(<Scissors handleClick={ () => {} } />);
	});
});