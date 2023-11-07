import 'normalize.css';
import { Stage } from '../components/stage';
import Game from '../features/game/components/game/Game';

export type Props = React.PropsWithChildren;

export const App: React.FC<Props> = () => {

	return(
		<Stage>
			<Game />
		</Stage>
	);
};

export default App;
