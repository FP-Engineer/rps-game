import { container } from './Stage.css';

export type Props = React.PropsWithChildren<{}>;

export const Stage: React.FC<Props> = ({ children }) => {

	return <div className={ container }>{ children }</div>;
};

export default Stage;