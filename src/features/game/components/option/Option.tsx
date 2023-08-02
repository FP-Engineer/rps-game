import { ReactNode } from 'react';
import { container } from './Option.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {
	label: string;
	handleClick: () => void;
	children?: ReactNode;
}

export const Option: React.FC<Props> = ({ handleClick, label, children }) => {

	return (
		<button
			className={ container }
			onClick={ () => handleClick() }
			aria-label={ label }
		>
			{ children }
		</button>
	);
};

export default Option;