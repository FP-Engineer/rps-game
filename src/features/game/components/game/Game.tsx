import { Choice } from '../../types/Choice';
import { container } from './Game.css';
import { PlayerTurn } from '../player-turn';
import { Announcement } from '../announcement';
import { useUserChoice } from '../../repos';

export const Game: React.FC = () => {

	const userChoice = useUserChoice();

	return(
		<div className={ container }>
			{userChoice === Choice.initial
				? <PlayerTurn />
				: <Announcement />
			}
		</div>
	);
};

export default Game;