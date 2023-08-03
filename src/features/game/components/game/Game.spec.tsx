import userEvent from '@testing-library/user-event';
import { render, getAllByRole } from '@testing-library/react';
import { Game } from './Game';
import { rules } from '../../constants/rules';
import { Choice } from '../../types';

describe('Game Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Game rules={[]} />);
	});

	it('presents all possible choices', () => {

		const { container } = render(<Game rules={rules} />);
		const buttons = getAllByRole(container, 'button');

		expect(buttons.length).toBe(rules.length);
	});

	it('should present a result screen.', async () => {
		
		const { findByRole, findByText } = render(<Game rules={[{
			choice: Choice.rock, beats: Choice.scissors
		}]} />);
		const option = await findByRole('button');

		await userEvent.click(option);

		const label = await findByText('YOU PICKED');

		expect(label).toBeInTheDocument;
	});
});