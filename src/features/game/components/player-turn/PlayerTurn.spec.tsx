import { render } from '@testing-library/react';
import { PlayerTurn } from './PlayerTurn';
import { Choice } from '../../types';

describe('PlayerTurn Test Suite', () => {

	it('renders without crashing.', () => {

		render(<PlayerTurn options={[]} />);
	});

	it('Should provide interactive elements to the user', async () => {
		const { getByRole } = render(<PlayerTurn options={[Choice.paper]} />);
		const option = getByRole('button');

		expect(option).toBeDefined();
	});

	it('should present a Choice.rock option to the user', async () => {
		const options = Object.values(Choice);
		const { getByLabelText } = render(<PlayerTurn options={options} />);
		const option = getByLabelText('choose rock');

		expect(option).toBeDefined();
	});

	it('should present a Choice.paper option to the user', async () => {
		const options = Object.values(Choice);
		const { getByLabelText } = render(<PlayerTurn options={options} />);
		const option = getByLabelText('choose paper');

		expect(option).toBeDefined();
	});

	it('should present a Choice.scissors option to the user', async () => {
		const options = Object.values(Choice);
		const { getByLabelText } = render(<PlayerTurn options={options} />);
		const option = getByLabelText('choose scissors');

		expect(option).toBeDefined();
	});

	it('should present a fallback option to the user', async () => {
		const { getByRole } = render(<PlayerTurn options={[Choice.initial]} />);
		const option = getByRole('button');

		expect(option).toBeDefined();
	});
});