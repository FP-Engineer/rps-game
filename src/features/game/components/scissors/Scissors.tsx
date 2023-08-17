import { Choice } from '../../types';
import { Option } from '../option';
import { container } from './Scissors.css';
import { ReactComponent as ScissorsIcon } from '../../../../assets/icon-scissors.svg';

export interface Props {
	handleClick: (choice: Choice) => void;
	glow?: boolean;
}

export const Scissors: React.FC<Props> = ({ handleClick, glow }) => {

	return (
		<div className={ container }>
			<Option label='choose scissors' handleClick={ () => handleClick(Choice.scissors) } glow={ glow }>
				<ScissorsIcon />
			</Option>
		</div>
	);
};

export default Scissors;