import { render, getAllByRole } from '@testing-library/react';
import { Game } from './Game';
import { rules } from '../../constants/rules';

describe('Game Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Game rules={[]} />);
	});

	it('presents all possible choices', () => {

		const { container } = render(<Game rules={rules} />);
		const buttons = getAllByRole(container, 'button');

		expect(buttons.length).toBe(rules.length);
	});
});