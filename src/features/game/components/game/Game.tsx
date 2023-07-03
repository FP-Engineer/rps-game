import { useMemo } from 'react';

import { Rule } from '../../types/Rule';
import { Choice } from '../../types/Choice';
import { container } from './Game.css';
import { useEvaluation } from '../../models/evaluation/Evaluation';
import { usePlayer } from '../../models/player/Player';
import { PlayerTurn } from '../player-turn';
import { Announcement } from '../announcement';

export interface Props {
	rules: Array<Rule>,
}

export const Game: React.FC<Props> = ({ rules }) => {

	const options: Array<Choice> = useMemo(() => rules.map(({choice}) => choice), [rules]);
	const { evaluate } = useEvaluation(rules);
	const { choice: playerChoice, choose } = usePlayer();
	const computerChoice = options[Math.floor(Math.random() * options.length)];
	const result = evaluate(playerChoice, computerChoice);

	return(
		<div className={ container }>
			{playerChoice === Choice.initial
				? <PlayerTurn options={options} choose={choose} />
				: <Announcement playerOneChoice={playerChoice} playerTwoChoice={computerChoice} result={result} />
			}
		</div>
	);
};

export default Game;