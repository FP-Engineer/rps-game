import React from 'react';
import { Choice } from '../../types';
import { container } from './PlayerTurn.css';
import { Option } from '../option';
import { optionsMap } from '../constants';

export interface Props {
	options: Array<Choice>;
	choose: (choice: Choice) => void;
}

export const PlayerTurn: React.FC<Props> = ({ options, choose }) => {

	return (
		<div className={ container }>
			{options.map((choice) => {
				const Component = optionsMap.get(choice);

				return Component
					? <Component key={choice} handleClick={choose} />
					: <Option key={choice} label={''} handleClick={() => choose(choice)}  />
			})}
		</div>
	);
};

export default PlayerTurn;
