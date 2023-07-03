import { render } from '@testing-library/react';
import { Announcement } from './Announcement';
import { Choice, Result } from '../../types';

describe('Announcement Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Announcement playerOneChoice={Choice.initial} playerTwoChoice={Choice.initial} result={Result.pending} />);
	});
});