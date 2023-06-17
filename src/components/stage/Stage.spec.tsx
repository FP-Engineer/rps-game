import { render } from '@testing-library/react';
import { Stage } from './Stage';

describe('Stage Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Stage />);
	});
});