import { Choice } from '../../types';
import { Option } from '../option';
import { container } from './Paper.css';
import { ReactComponent as PaperIcon } from '../../../../assets/icon-paper.svg';

export interface Props {
	handleClick: (choice: Choice) => void;
}

export const Paper: React.FC<Props> = ({ handleClick }) => {

	return (
		<div className={ container }>
			<Option label='choose paper' handleClick={ () => handleClick(Choice.paper) }>
				<PaperIcon />
			</Option>
		</div>
	);
};

export default Paper;