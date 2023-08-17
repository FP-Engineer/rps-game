import { useCallback, useMemo } from 'react';
import { flushSync } from 'react-dom';

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
	const handleChoice = useCallback((choice: Choice) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (document.startViewTransition) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			document.startViewTransition(() => {
				flushSync(() => {
					choose(choice);
				});
			});
		}
	}, [choose]);

	return(
		<div className={ container }>
			{playerChoice === Choice.initial
				? <PlayerTurn options={options} choose={handleChoice} />
				: <Announcement playerOneChoice={playerChoice} playerTwoChoice={computerChoice} result={result} />
			}
		</div>
	);
};

export default Game;