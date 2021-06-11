import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import HomeCard from '../components/Home/HomeCard';
import MainTop from '../components/Home/MainTop';
import styled from '@emotion/styled';
import { reservationApi } from '../lib/api';

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.content {
		max-width: 1200px;
		width: 100%;
		text-align: center;
		&__title span:nth-of-type(2n + 1) {
			color: #fec108;
		}
		&__title {
			margin-top: 12px;
			font-size: 14px;
			font-weight: 500;
		}
		&__alert span:nth-of-type(2n) {
			color: #fec108;
		}
		&__alert {
			margin-top: 12px;
			font-size: 14px;
			font-weight: 500;
			margin-bottom: 10px;
		}
	}
	.content__card {
		display: grid;
		grid-template-columns: repeat(2, auto);
		row-gap: 12px;
	}
	@media screen and (min-width: 1000px) {
		.content__title {
			font-size: 30px;
			margin-bottom: 10px;
		}
		.content__alert {
			font-size: 21px;
			font-weight: 550;
			margin-top: 27px;
			margin-bottom: 60px;
		}
		.content__card {
			grid-template-columns: repeat(4, auto);
		}
	}
`;

const userData = {
	id: '1',
	nickname: '안소현',
	photoUrl: '/assets/images/EmptyProfile.svg',
	reservation: 0,
};

const cardData = [
	{
		id: '1',
		image: '/assets/icons/Digital.svg',
		title: '디지털 열람석',
		desc: '디지털자료 열람 및 문서 편집 공간',
		button: '예약',
		isAvailable: true,
	},
	{
		id: '2',
		image: '/assets/icons/DB.svg',
		title: '원문 DB석',
		desc: '원문 DB 열람 전용 공간',
		button: '예약',
		isAvailable: true,
	},
	{
		id: '3',
		image: '/assets/icons/Editor.svg',
		title: '미디어 편집석',
		desc: '영상, 음향, 이미지 콘텐츠 편집 공간',
		button: '예약',
		isAvailable: true,
	},
	{
		id: '4',
		image: '/assets/icons/Media.svg',
		title: '미디어자료이용석',
		desc: '멀티미디어 콘텐츠 열람 공간 자료3점 이용가능',
		button: '1인석',
		isAvailable: true,
	},
	{
		id: '5',
		image: '/assets/icons/Studio.svg',
		title: '스튜디오',
		desc: '영상, 음향등 미디어 콘텐츠 창작, 공유 공간',
		button: '스튜디오 1-6',
		isAvailable: true,
	},
	{
		id: '6',
		image: '/assets/icons/Laptop.svg',
		title: '노트북이용석',
		desc: '1인 1석 본인노트북 사용 (노트북 대여 없음)',
		button: '예약',
		isAvailable: true,
	},
	{
		id: '7',
		image: '/assets/icons/Seminar.svg',
		title: '세미나실',
		desc: '그룹별 세미나 공간',
		button: '현재 이용 불가',
		isAvailable: true,
	},
];

function Home() {
	const { nickname, photoUrl, reservation } = userData;
	const [studio, setStudio] = useState([]);
	const [seminar, setSeminar] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const [studioData, seminarData] = await Promise.all([reservationApi.getStudio(), reservationApi.getSeminar()]);
				setStudio(studioData.data);
				setSeminar(seminarData.data);
			} catch (e) {
				console.log(e);
				return null;
			}
		})();
	}, []);

	//studio 이용가능 여부 체크
	const studioReservation = studio.map(e => e.reservationNow);
	const studioArr = [];
	studioReservation.map(data => {
		const isFalse = data.every(v => v === false);
		isFalse ? studioArr.push(false) : studioArr.push(true);
		return studioArr;
	});
	const isUnavailableStudio = studioArr.every(v => v === false);
	const studioCardData = cardData.find(card => card.id === '5');
	isUnavailableStudio ? (studioCardData.isAvailable = false) : (studioCardData.isAvailable = true);

	//seminar 이용가능 여부 체크
	const seminarReservation = seminar.map(e => e.reservationNow);
	const seminarArr = [];
	seminarReservation.map(data => {
		const isFalsee = data.every(v => v === false);
		isFalsee ? seminarArr.push(false) : seminarArr.push(true);
		return seminarArr;
	});
	const isUnavailableSeminar = seminarArr.every(v => v === false);
	const seminarCardData = cardData.find(card => card.id === '7');
	isUnavailableSeminar ? (seminarCardData.isAvailable = false) : (seminarCardData.isAvailable = true);

	return (
		<>
			<Navbar theme={true} nickname={nickname} photoUrl={photoUrl}></Navbar>

			<HomeWrapper>
				<div className="content">
					<div className="content__title">
						<span>{nickname}</span>
						<span>님 안녕하세요. 예약정보가 &nbsp;</span>
						<span>{reservation} &nbsp;</span>
						<span>건 있습니다.</span>
					</div>
					<div className="content__maintop">
						<MainTop></MainTop>
					</div>
					<div className="content__alert">
						<span>코로나 19 감염예방을 위해 </span>
						<span>제한적 운영</span>
						<span> 중입니다. </span>
					</div>
					<div className="content__card">
						{cardData.map(card => (
							<HomeCard card={card} key={card.id} />
						))}
					</div>
				</div>
			</HomeWrapper>
		</>
	);
}

export default Home;
