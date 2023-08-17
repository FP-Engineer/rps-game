import { Choice } from '../../types';
import { Option } from '../option';
import { container } from './Paper.css';
import { ReactComponent as PaperIcon } from '../../../../assets/icon-paper.svg';

export interface Props {
	handleClick: (choice: Choice) => void;
	glow?: boolean,
}

export const Paper: React.FC<Props> = ({ handleClick, glow }) => {

	return (
		<div className={ container }>
			<Option label='choose paper' handleClick={ () => handleClick(Choice.paper) } glow={ glow }>
				<PaperIcon />
			</Option>
		</div>
	);
};

export default Paper;