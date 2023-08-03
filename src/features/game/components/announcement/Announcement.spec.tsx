import { render } from '@testing-library/react';
import { Announcement } from './Announcement';
import { Choice, Result } from '../../types';
import userEvent from '@testing-library/user-event';

describe('Announcement Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Announcement playerOneChoice={Choice.initial} playerTwoChoice={Choice.initial} result={Result.pending} />);
	});

	it('renders YOU WIN if player 1 wins.', () => {

		const { getByText } = render(<Announcement playerOneChoice={Choice.initial} playerTwoChoice={Choice.initial} result={Result.win} />);
		expect(getByText('YOU WIN')).toBeInTheDocument;
	});

	it('renders YOU LOSE if player 1 loses.', () => {

		const { getByText } = render(<Announcement playerOneChoice={Choice.initial} playerTwoChoice={Choice.initial} result={Result.pwnd} />);
		expect(getByText('YOU LOSE')).toBeInTheDocument;
	});

	it('renders DRAW if nobody wins', () => {

		const { getByText } = render(<Announcement playerOneChoice={Choice.initial} playerTwoChoice={Choice.initial} result={Result.draw} />);
		expect(getByText('DRAW')).toBeInTheDocument;
	});

	it('renders UNDETERMINED if the result is not expected.', () => {

		const { getByText } = render(<Announcement playerOneChoice={Choice.initial} playerTwoChoice={Choice.initial} result={Result.inapplicable} />);
		expect(getByText('UNDETERMINED')).toBeInTheDocument;
	});

	it('should not reevaluate on click', async () => {

		const { getByText, getAllByRole } = render(<Announcement playerOneChoice={Choice.rock} playerTwoChoice={Choice.scissors} result={Result.inapplicable} />);
		const buttons = getAllByRole('button');

		await userEvent.click(buttons[0]);

		expect(getByText('UNDETERMINED')).toBeInTheDocument;
	});
});