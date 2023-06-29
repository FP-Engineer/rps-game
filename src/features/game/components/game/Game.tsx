import { useMemo } from 'react';
import { Choice, Rule } from '../../constants';
import { container } from './Game.css';

export interface Props {
	rules: Array<Rule>,
}

export const Game: React.FC<Props> = ({ rules }) => {
	const choices: Array<Choice> = useMemo(() => rules.map(({choice}) => choice), [rules]);

	return(
		<div className={ container }>
			{choices.map((choice) => <button key={choice}>{choice}</button>)}
		</div>
	);
};

export default Game;