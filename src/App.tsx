import 'normalize.css';
import { Stage } from "./components/stage";

export type Props = React.PropsWithChildren;

export const App: React.FC<Props> = () => {

	return <Stage />;
};

export default App;
