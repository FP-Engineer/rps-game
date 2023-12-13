import React from 'react';
import { Choice } from '../../types';
import { container } from './PlayerTurn.css';
import { Option } from '../option';
import { optionsMap } from '../constants';
import { userChoices } from '../../repos';
import { options as rps } from '../../constants';

export interface Props {
	options?: Array<Choice>;
}

export const PlayerTurn: React.FC<Props> = ({ options = rps }) => {

	return (
		<div className={ container }>
			{options.map((choice) => {
				const Component = optionsMap.get(choice);

				return Component
					? <Component key={choice} handleClick={() => userChoices.next(choice)} />
					: <Option key={choice} label={''} handleClick={() => userChoices.next(choice)}  />
			})}
		</div>
	);
};

export default PlayerTurn;
