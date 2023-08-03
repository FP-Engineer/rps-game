import { container, bold as boldStyle } from './Label.css';
import cn from 'classnames';

export interface Props {
	children: string;
	bold?: boolean;
	className?: string;
}

export const Label: React.FC<Props> = ({ className, children, bold = false }) => {

	const containerClassNames = cn(className, container, {[boldStyle]: bold });

	return (
		<p className={ containerClassNames }>
			{ children }
		</p>
	);
};

export default Label;