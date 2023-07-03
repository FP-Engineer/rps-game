import { Choice, Result } from '../../types';
import { container } from './Announcement.css';

export interface Props {
	playerOneChoice: Choice;
	playerTwoChoice: Choice;
	result: Result;
}

export const Announcement: React.FC<Props> = ({ playerOneChoice, playerTwoChoice, result }) => {

	return <div className={ container }>{playerOneChoice} vs. {playerTwoChoice}: {result}</div>;
};

export default Announcement;