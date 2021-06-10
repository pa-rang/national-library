import styled from '@emotion/styled';
import { useState } from 'react';

const DateButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 33px;
	margin-bottom: 2px;
	margin-right: 19px;
	min-width: 67px;
	border-radius: 10px;
	font-weight: 500;
	font-size: 12px;

	border: ${props => (props.isClicked ? 'none' : '1px solid #011e57')};
	background-color: ${props => (props.isClicked ? '#25C1F3' : '#fff')};
	color: ${props => (props.isClicked ? '#fff' : '#011e57')};
	cursor: pointer;

	@media screen and (min-width: 1000px) {
		width: 133px;
		height: 57px;
		font-size: 21px;
		margin-right: 24px;
	}
`;

const DateButton = ({ date }) => {
	const [isClicked, setIsClicked] = useState(false);
	const handleDateClick = () => {
		setIsClicked(val => !val);
	};

	return (
		<DateButtonWrapper isClicked={isClicked}>
			<div onClick={handleDateClick}> {date}</div>
		</DateButtonWrapper>
	);
};

export default DateButton;
