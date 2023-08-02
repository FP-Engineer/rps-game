import React from 'react';
import { Choice } from '../../types';
import { container } from './PlayerTurn.css';
import { Scissors } from '../scissors';
import { Option } from '../option';

export interface Props {
	options: Array<Choice>;
	choose: (choice: Choice) => void;
}

const optionsMap = new Map([
	[Choice.scissors, Scissors]
]);

export const PlayerTurn: React.FC<Props> = ({ options, choose }) => {

	return <div className={ container }>
		{options.map((choice) => {
			const Component = optionsMap.get(choice);

			return Component
				? <Component handleClick={choose} />
				: <Option label={''} handleClick={() => choose(choice)}  />
		})}
	</div>;
};

export default PlayerTurn;
