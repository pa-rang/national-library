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

const mockData = [
  {
      id:"1",
      image:"/assets/icons/Digital.svg",
      title: "디지털 열람석",
      desc:"디지털자료 열람 및 문서 편집 공간",
  },
  {
      id:"2",
      image:"/assets/icons/DB.svg",
      title: "원문 DB석",
      desc:"원문 DB 열람 전용 공간",
  },
  {
      id:"3",
      image:"/assets/icons/Editor.svg",
      title: "미디어 편집석",
      desc:"영상, 음향, 이미지 콘텐츠 편집 공간",
  },
  {
      id:"4",
      image:"/assets/icons/Media.svg",
      title: "미디어자료이용석",
      desc:"멀티미디어 콘텐츠 열람 공간 자료3점 이용가능",
  },
  {
      id:"5",
      image:"/assets/icons/Studio.svg",
      title: "스튜디오",
      desc:"영상, 음향등 미디어 콘텐츠 창작, 공유 공간",
  },
  {
      id:"6",
      image:"/assets/icons/Laptop.svg",
      title: "노트북이용석",
      desc:"1인 1석 본인노트북 사용 (노트북 대여 없음)",
  },
  {
      id:"7",
      image:"/assets/icons/Seminar.svg",
      title: "세미나실",
      desc:"그룹별 세미나 공간",
  },
]

function Temp ({card}){
  const router = useRouter();
  return(
    <>
    <HomeCard>
      <ImageStyle width={68} height={68} src={card.image} onClick={() => router.push("/reservation")}/>
      <CardText size="LARGE">{card.title}</CardText><CardText size="SMALL">{card.desc}</CardText>
    </HomeCard>
    </>
  );
}

function HomePage() {
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
          {
            mockData.map(
              card => (<Temp card={card} key={card.id}/>)
            )
          }
        </CardWrap>
        </>
    );
};

export default HomePage;