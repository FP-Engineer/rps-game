import { render } from '@testing-library/react';
import { Paper } from './Paper';

describe('Paper Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Paper />);
	});
});