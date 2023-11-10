import userEvent from '@testing-library/user-event';
import { render, getAllByRole } from '@testing-library/react';
import { Game } from './Game';
import { rules } from '../../constants/rules';

describe('Game Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Game />);
	});

	it('presents all possible choices', () => {

		const { container } = render(<Game />);
		const buttons = getAllByRole(container, 'button');

		expect(buttons.length).toBe(rules.length);
	});

	it('should present a result screen.', async () => {
		
		const { getAllByRole, findByText } = render(<Game />);
		const options = getAllByRole('button');

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		await userEvent.click(options.at(0)!);

		const label = await findByText('YOU PICKED');

		expect(label).toBeTruthy()
	});
});