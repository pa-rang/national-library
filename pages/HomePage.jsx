import React from 'react';
import Header from '../components/common/Header';
import MainTop from '../components/Home/MainTop';
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

const userData = {
    id:'1',
    nickname:'안소현',
    photoURl:'/assets/images/simple.svg',
    reservation:1,
};

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
        </>
    );
};

export default HomePage;