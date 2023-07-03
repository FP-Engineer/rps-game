import { Choice } from '../../types';
import { container } from './PlayerTurn.css';

export interface Props {
	options: Array<Choice>;
	choose: (choice: Choice) => void;
}

export const PlayerTurn: React.FC<Props> = ({ options, choose }) => {

	return <div className={ container }>
		{options.map((choice) => (
			<button
				key={choice}
				onClick={() => { choose(choice) }}
			>
				{choice}
			</button>
		))}
	</div>;
};

export default PlayerTurn;