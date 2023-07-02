import { useMemo } from 'react';

import { Rule } from '../../types/Rule';
import { Choice } from '../../types/Choice';
import { container } from './Game.css';
import { useEvaluation } from '../../models/evaluation/Evaluation';

export interface Props {
	rules: Array<Rule>,
}

export const Game: React.FC<Props> = ({ rules }) => {

	const options: Array<Choice> = useMemo(() => rules.map(({choice}) => choice), [rules]);
	const { evaluate } = useEvaluation(rules);
	const choose = (playerChoice: Choice) => {

		const computerChoice = options[Math.floor(Math.random() * options.length)];
		const result = evaluate(playerChoice, computerChoice);

		alert(`You: ${playerChoice} Computer: ${computerChoice} Result: ${result}`);
	}

	return(
		<div className={ container }>
			{options.map((choice) => (
				<button
					key={choice}
					onClick={() => { choose(choice) }}
				>
					{choice}
				</button>
			))}
		</div>
	);
};

export default Game;