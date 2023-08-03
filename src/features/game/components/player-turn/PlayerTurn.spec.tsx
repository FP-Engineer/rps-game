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

	it('should call choose function with Choice.rock when rock option is clicked', async () => {
		const options = Object.values(Choice);
		const callback = jest.fn();
		const { getByLabelText } = render(<PlayerTurn options={options} choose={callback} />);
		const option = getByLabelText('choose rock');

		await userEvent.click(option);

		expect(callback).toHaveBeenLastCalledWith(Choice.rock);
	});

	it('should call choose function with Choice.paper when paper option is clicked', async () => {
		const options = Object.values(Choice);
		const callback = jest.fn();
		const { getByLabelText } = render(<PlayerTurn options={options} choose={callback} />);
		const option = getByLabelText('choose paper');

		await userEvent.click(option);

		expect(callback).toHaveBeenLastCalledWith(Choice.paper);
	});

	it('should call choose function with Choice.scissors when scissors option is clicked', async () => {
		const options = Object.values(Choice);
		const callback = jest.fn();
		const { getByLabelText } = render(<PlayerTurn options={options} choose={callback} />);
		const option = getByLabelText('choose scissors');

		await userEvent.click(option);

		expect(callback).toHaveBeenLastCalledWith(Choice.scissors);
	});

	it('should provide a fallback option', async () => {
		const callback = jest.fn();
		const { getByRole } = render(<PlayerTurn options={[Choice.initial]} choose={callback} />);
		const option = getByRole('button');

		await userEvent.click(option);

		expect(callback).toHaveBeenLastCalledWith(Choice.initial);
	});
});