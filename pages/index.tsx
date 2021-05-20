import React from 'react';
import Navbar from '../components/common/Navbar';
import HomeCard from '../components/Home/HomeCard';
import MainTop from '../components/Home/MainTop';
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  .content {
    max-width: 1200px;
    width: 100%;
    //padding: 0 24px;
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
}
`;

const userData = {
    id:'1',
    nickname:'안소현',
    photoUrl:'/assets/images/simple.svg',
    reservation:1,
};

const mockData = [
  {
      id:"1",
      image:"/assets/icons/Digital.svg",
      title: "디지털 열람석",
      desc:"디지털자료 열람 및 문서 편집 공간",
      button:"예약",
      clickable:true,
  },
  {
      id:"2",
      image:"/assets/icons/DB.svg",
      title: "원문 DB석",
      desc:"원문 DB 열람 전용 공간",
      button:"예약",
      clickable:true,
  },
  {
      id:"3",
      image:"/assets/icons/Editor.svg",
      title: "미디어 편집석",
      desc:"영상, 음향, 이미지 콘텐츠 편집 공간",
      button:"예약",
      clickable:true,
  },
  {
      id:"4",
      image:"/assets/icons/Media.svg",
      title: "미디어자료이용석",
      desc:"멀티미디어 콘텐츠 열람 공간 자료3점 이용가능",
      button:"1인석",
      clickable:true,
  },
  {
      id:"5",
      image:"/assets/icons/Studio.svg",
      title: "스튜디오",
      desc:"영상, 음향등 미디어 콘텐츠 창작, 공유 공간",
      button:"스튜디오 1-6",
      clickable:true,
  },
  {
      id:"6",
      image:"/assets/icons/Laptop.svg",
      title: "노트북이용석",
      desc:"1인 1석 본인노트북 사용 (노트북 대여 없음)",
      button:"예약",
      clickable:true,
  },
  {
      id:"7",
      image:"/assets/icons/Seminar.svg",
      title: "세미나실",
      desc:"그룹별 세미나 공간",
      button:"현재 이용 불가",
      clickable:false,
  },
]

function Home() {
  const {nickname, photoUrl, reservation} = userData;
    return (
        <>
        <Navbar theme={true} nickname={nickname} photoUrl={photoUrl} ></Navbar>

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
              {
                mockData.map(
                  card => (<HomeCard card={card} key={card.id}/>)
                )
              }
            </div>
          </div>

        </HomeWrapper>
        </>
    );
};

export default Home;