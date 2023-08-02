import { render } from '@testing-library/react';
import { Option } from './Option';

describe('Option Test Suite', () => {

	it('renders without crashing.', () => {

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		render(<Option label={''} handleClick={ () => {} }><></></Option>);
	});
});