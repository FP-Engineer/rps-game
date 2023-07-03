import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayerTurn } from './PlayerTurn';
import { Choice } from '../../types';

describe('PlayerTurn Test Suite', () => {

	it('renders without crashing.', () => {

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		render(<PlayerTurn options={[]} choose={() => {}} />);
	});

	it('Should delegate the user input to the provided callback', async () => {
		const callback = jest.fn();
		const { getByRole } = render(<PlayerTurn options={[Choice.paper]} choose={callback} />);
		const option = getByRole('button');

		await userEvent.click(option);

		expect(callback).toHaveBeenLastCalledWith(Choice.paper);
	});
});