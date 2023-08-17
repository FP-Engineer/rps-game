import { ReactNode } from 'react';
import { container, glow as glowStyle, cycle, button as buttonStyle } from './Option.css';
import cn from 'classnames';
 
export interface Props {
	label: string;
	handleClick: () => void;
	glow?: boolean,
	children?: ReactNode;
}

export const Option: React.FC<Props> = ({ handleClick, label, children, glow = false }) => {

	return (
		<div className={container}>
			<span className={cn(cycle, {
				[glowStyle]: glow
			})}></span>
			<button
				className={ cn(cycle, buttonStyle) }
				onClick={ () => handleClick() }
				aria-label={ label }
			>
				{ children }
			</button>
		</div>
		
	);
};

export default Option;