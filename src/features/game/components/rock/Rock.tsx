import { Option } from '../option';
import { container } from './Rock.css';
import { ReactComponent as RockIcon } from '../../../../assets/icon-rock.svg';

export interface Props {
	handleClick?: () => void;
	glow?: boolean;
}

export const Rock: React.FC<Props> = ({ handleClick, glow }) => {

	return (
		<div className={ container }>
			<Option label='choose rock' handleClick={ handleClick } glow={ glow }>
				<RockIcon />
			</Option>
		</div>
	);
};

export default Rock;