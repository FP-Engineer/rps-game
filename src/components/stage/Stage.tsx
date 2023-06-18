import { container } from './Stage.css';

export type Props = React.PropsWithChildren<object>;

export const Stage: React.FC<Props> = ({ children }) => {

	return <div className={ container }>{ children }</div>;
};

export default Stage;