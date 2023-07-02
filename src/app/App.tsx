import 'normalize.css';
import { Stage } from '../components/stage';
import Game from '../features/game/components/game/Game';
import { rules } from '../features/game/constants/rules';

export type Props = React.PropsWithChildren;

export const App: React.FC<Props> = () => {

	return(
		<Stage>
			<Game rules={rules} />
		</Stage>
	);
};

export default App;
