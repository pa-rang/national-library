import React from 'react';
import { useRouter } from "next/router";
import Header from '../components/common/Header';
import HomeCard from '../components/Home/HomeCard';
import MainTop from '../components/Home/MainTop';
import Image from "next/image";
import styled from "@emotion/styled";

const HomeWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  @media (min-width: 1000px) {
    width: 1200px;
  }
}
`;

const sizeSet = {
  SMALL: `
  font-size: 12px !important;
  `,
  MEDIUM: `
  font-size: 14px !important;
  `,
  LARGE: `
  font-size: 16px !important;
  font-weight: bold !important;
  `,
  XLARGE: `
  font-size: 30px !important;
  `,
};

const HomeText = styled.p`
  color: #333333;
  margin: 10px auto;
  font-weight: medium;
  text-align: center;
  @media (min-width: 375px) {
    ${({ size = 'Medium' }) => sizeSet[size]}
  }
  @media (min-width: 1000px) {
    ${({ size = 'XLARGE' }) => sizeSet[size]}
  }
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 12px;
  @media (min-width: 375px) {
    margin-top:40px;
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: 1000px) {
    margin-top:40px;
    grid-template-columns: repeat(4, auto);
  }
`;

const ImageStyle = styled(Image)`
  width: 68px;
  height: 68px;
  cursor: pointer;
`;

const CardText = styled.p`
  color: #011E57;
  margin: 0;
  ${({ size = 'LARGE' }) => sizeSet[size]}
`;

const userData = {
    id:'1',
    nickname:'안소현',
    photoURl:'/assets/images/simple.svg',
    reservation:1,
};

function HomePage() {
  const router = useRouter();
  const {nickname, photoURl, reservation} = userData;

    return (
        <>
        <Header nickname={nickname} photoURl={photoURl} ></Header>

        <HomeWrap>
          <HomeText size="XLARGE">
            <span style={{color:'#FEC108'}}>{nickname}</span>님  안녕하세요. 
              예약정보가 <span style={{color:'#FEC108'}}>{reservation}</span> 건 있습니다.
          </HomeText>
          <MainTop></MainTop>
          <HomeText size="MEDIUM">
            코로나 19 감염예방을 위해 <span style={{color:'#FEC108'}}>제한적 운영</span> 중입니다.
          </HomeText>
        </HomeWrap>

        <CardWrap>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/Digital.svg"}/>
            <CardText size="LARGE">디지털 열람석</CardText><CardText size="SMALL">디지털자료 열람 및 문서 편집 공간</CardText>
          </HomeCard>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/DB.svg"}/>
            <CardText size="LARGE">원문 DB석</CardText><CardText size="SMALL">원문 DB 열람 전용 공간</CardText>
          </HomeCard>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/Editor.svg"}/>
            <CardText size="LARGE">미디어 편집석</CardText><CardText size="SMALL">영상, 음향, 이미지 콘텐츠 편집 공간</CardText>
          </HomeCard>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/Media.svg"}/>
            <CardText size="LARGE">미디어자료이용석</CardText><CardText size="SMALL">멀티미디어콘텐츠열람공간 자료3점 이용가능</CardText>
          </HomeCard>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/Studio.svg"} onClick={() => router.push("/reservation")}/>
            <CardText size="LARGE">스튜디오</CardText><CardText size="SMALL">영상, 음향등 미디어 콘텐츠 창작, 공유 공간</CardText>
          </HomeCard>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/Laptop.svg"}/>
            <CardText size="LARGE">노트북이용석</CardText><CardText size="SMALL">1인 1석 본인노트북 사용 (노트북 대여 없음)</CardText>
          </HomeCard>
          <HomeCard>
            <ImageStyle width={68} height={68} src={"/assets/icons/Seminar.svg"}/>
            <CardText size="LARGE">세미나실</CardText><CardText size="SMALL">그룹별 세미나 공간</CardText>
          </HomeCard>
        </CardWrap>
        </>
    );
};

export default HomePage;