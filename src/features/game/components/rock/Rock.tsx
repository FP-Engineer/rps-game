import { Choice } from '../../types';
import { Option } from '../option';
import { container } from './Rock.css';
import { ReactComponent as RockIcon } from '../../../../assets/icon-rock.svg';

export interface Props {
	handleClick: (choice: Choice) => void;
}

export const Rock: React.FC<Props> = ({ handleClick }) => {

	return (
		<div className={ container }>
			<Option label='choose rock' handleClick={ () => handleClick(Choice.rock) }>
				<RockIcon />
			</Option>
		</div>
	);
};

export default Rock;