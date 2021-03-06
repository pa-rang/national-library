import React from 'react';
import styled from '@emotion/styled';
import StyledButton from '../common/StyledButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HomeCardWrapper = styled.div`
	width: 154px;
	height: 154px;
	margin: 0 auto;
	padding: 10px 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	color: black;
	background-color: white;
	border-radius: 12px;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	.card__image {
	}
	.card__title {
		font-size: 16px;
		color: #011e57;
		font-weight: bold;
	}
	.card__desc {
		font-size: 12px;
		color: #011e57;
	}
	.card__button {
		display: none;
	}
	@media screen and (min-width: 1000px) {
		width: 278px;
		height: 278px;
		.card__image img {
			width: 130px;
			height: 130px;
		}
		.card__title {
			font-size: 24px;
			color: #011e57;
			font-weight: bold;
			margin: 10px auto;
		}
		.card__desc {
			font-size: 12px;
			color: #011e57;
			margin-bottom: 10px;
		}
		.card__button {
			display: block;
		}
	}
`;

function HomeCard({ card }) {
	const { image, title, desc, button, isAvailable } = card;
	const btnColor = isAvailable === true ? 'navy' : 'gray';
	return (
		<HomeCardWrapper>
			<div className="card__image">
				<Link href="/reservation">
					<img width="68px" height="68px" src={image} />
				</Link>
			</div>
			<div className="card__title">{title}</div>
			<div className="card__desc">{desc}</div>
			<div className="card__button">
				<Link href="/reservation">
					<StyledButton appearance={btnColor}>{button}</StyledButton>
				</Link>
			</div>
		</HomeCardWrapper>
	);
}
export default HomeCard;
