import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/reservation/Navbar';
import Header from '../components/reservation/Header';
import DateButton from '../components/reservation/DateButton';
import SpaceCard from '../components/reservation/SpaceCard';
import ToolButton from '../components/reservation/ToolButton';
import { getStudioInfo } from '../lib/api/api';

const ReservationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.content {
		max-width: 1200px;
		width: 100%;
		padding: 0 24px;
	}

	hr {
		width: 100%;
		color: #d3d3d3;
	}

	.content__date {
		&__header {
			display: flex;
			flex-direction: column;
			margin-top: 25px;
		}

		&__title {
			color: #011e57;
			font-size: 18px;
			font-weight: 500;
		}

		&__today {
			margin-top: 5px;
			color: #d7d8d9;
			font-size: 12px;
		}

		&__buttons {
			display: flex;
			margin-top: 40px;
		}
	}

	.content__space {
		&__header {
			display: flex;
			flex-direction: column;
			margin-top: 40px;
		}

		&__title {
			color: #011e57;
			font-size: 18px;
			font-weight: 500;
		}

		&__cards {
			margin-bottom: 40px;
		}

		&__detail {
			color: #fec108;
			font-size: 12px;
			font-weight: 500;
			margin-top: 5px;
			& > span {
				display: block;
			}
		}
	}

	.content__tools {
		display: flex;
		flex-direction: column;

		&__title {
			color: #011e57;
			font-size: 18px;
			font-weight: 500;
			margin-bottom: 5px;
		}

		&__search {
			text-align: center;
			font-weight: 500;
			font-size: 16px;
			color: #011e57;
			margin-top: 7px;
		}

		&__buttons {
			margin-top: 14px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		&__detail {
			font-weight: bold;
			font-size: 12px;
			text-align: center;
			color: #25c1f3;
			margin: 19px 0 159px;
			width: 230px;
			align-self: center;

			& > span {
				display: block;
			}

			&--hidden {
				width: 800px;
				height: 87px;
				font-size: 18px;
				color: #d7d8d9;
				align-self: center;
				text-align: center;
				margin-bottom: 180px;
				display: none;
			}
		}
	}

	@media screen and (min-width: 1000px) {
		.content {
			padding: 0;
		}

		.content__date {
			&__header {
				flex-direction: row;
				align-items: center;
				margin-top: 64px;
			}

			&__title {
				font-size: 30px;
			}

			&__today {
				margin-left: 9px;
				font-size: 21px;
			}

			&__buttons {
				margin-top: 42px;
				justify-content: center;
			}
		}

		.content__space {
			&__header {
				flex-direction: row;
				align-items: center;
				margin-top: 129px;
			}

			&__title {
				font-size: 30px;
			}

			&__detail {
				margin-left: 9px;
				font-size: 21px;
				& > span {
					display: inline;
				}
			}

			&__cards {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				margin-top: 56px;
				margin-bottom: 173px;
			}
		}

		.content__tools {
			&__search {
				font-size: 30px;
				margin: 62px 0 42px;
			}

			&__title {
				font-size: 30px;
			}

			&__detail {
				margin-bottom: 32px;
				width: 600px;
				font-size: 18px;

				& > span {
					display: inline;
				}

				&--hidden {
					display: block;
				}
			}
		}
	}
`;

const tools = ['삼각대', '웹캠', '카메라', '조명', '스크린', '마이크', '프롬프터'];

const dates = ['05-14(금)', '05-15(토)', '05-16(일)', '05-17(월)'];
function Reservation() {
	const [studioInfo, setStudioInfo] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await getStudioInfo();
			setStudioInfo(data);
		})();
	}, []);

	return (
		<>
			<Navbar />

			<Header />
			<ReservationWrapper>
				<div className="content">
					<div className="content__date">
						<div className="content__date__header">
							<div className="content__date__title">조회일자</div>
							<div className="content__date__today">오늘 날짜-2021-05-14 금요일</div>
						</div>
						<hr />
						<div className="content__date__buttons">
							{dates.map((date, idx) => (
								<DateButton key={idx} date={date} />
							))}
						</div>
					</div>
					<div className="content__space">
						<div className="content__space__header">
							<div className="content__space__title">공간선택</div>
							<div className="content__space__detail">
								<span>코로나 19로 인한 제한 운영 시, </span>
								<span>스튜디오 1~6번은 1명만 이용 가능합니다.</span>
							</div>
						</div>
						<hr />
						<div className="content__space__cards">
							{studioInfo.map(studio => (
								<SpaceCard
									key={studio.roomNumber}
									roomNumber={studio.roomNumber}
									reservationStatus={studio.reservationNow}
									isPossible={studio.reservationNow.some(res => res === false)}
								/>
							))}
						</div>
					</div>
					<div className="content__tools">
						<div className="content__tools__title">제공장비</div>
						<hr />
						<div className="content__tools__search">제공장비 검색</div>
						<div className="content__tools__buttons">
							{tools.map((tool, idx) => (
								<ToolButton key={idx} tool={tool} />
							))}
						</div>
						<div className="content__tools__detail">
							<span>스튜디오 대여 장비는 </span>
							<span>예약 신청에 의해서만 사용이 가능합니다.</span>
						</div>
						<div className="content__tools__detail--hidden">
							스튜디오 내부 장비 (PC, 배경스크린, 조명 등)는 별도 예약 없이 사용 가능 합니다.
							<br />
							스튜디오 공요장비는 한정수량으로, 당일 안내데스크에서 신청하시면 선착순 대여됩니다. <br />
							촬영장비 및 소품을 가지고 오실 경우 (식음료 제외), 물품보관 함에서 이동용 카트를 대여해드립니다.
						</div>
					</div>
				</div>
			</ReservationWrapper>
		</>
	);
}

export default Reservation;
