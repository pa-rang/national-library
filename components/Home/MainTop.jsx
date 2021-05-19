import styled from "@emotion/styled";
import React from 'react';

const MainTopWrap = styled.div`
    width: 100%;
    height: 88px;
    background-color:#011E57;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: stretch;
    .title {
      margin: auto 0px;
      color: white;
      font-size: 12px;
    }
    .title > span {
      display:none;
    }
    .mobile__title__info {
      color: #B6CAE5;
      font-size: 10px;
    }
    .desktop__underline {
      display: none;
    }
    .title__link {
      display: none;
    }
    @media screen and (min-width: 1000px) {
      .title {
        font-size: 18px;
        width: 320px;
        margin: 0 auto;
        text-align:left;
        padding: 2px 10px;
      }
      .title > span {
        display:inline-block;
        color: #B6CAE5;
        font-size: 14px; 
      }
      .mobile__title__info {
        display:none;
      }
      .mobile__underline {
        display: none;
      }
      .desktop__underline {
        display: block
      }
      .title__link {
        font-size: 16px;
        display: block;
      }
    }
`;

function MainTop() {
    return (
        <MainTopWrap>
          <div className='title'>
            좌석예약 &nbsp;<span >예약{} 불이행{} 이용제한</span>
            <div>
                <img 
                className="mobile__underline" 
                src="/assets/images/Underline.svg" 
                width="120px" 
                height="2px" 
                />
            </div>
            <div className="mobile__title__info">예약{} 불이행{} <br/> 이용제한</div>
            <img 
                className="desktop__underline" 
                src="/assets/images/Underline.svg" 
            />
            <div className="title__link">
                디지털 열람석 &nbsp;&nbsp; 원문 DB석
                <br />
                미디어 편집석 &nbsp;&nbsp; 미디어자료 이용석
            </div>
          </div>
          <div className='title'>
            공간예약 &nbsp;<span>예약{} 불이행{} 이용제한</span>    
            <div>
              <img 
                className="mobile__underline" 
                src="/assets/images/Underline.svg" 
                width="120px" 
                height="2px" 
              />
            </div>
            <div className="mobile__title__info">예약{} 불이행{}<br />이용제한</div>
            <img 
              className="desktop__underline" 
              src="/assets/images/Underline.svg" 
            />
            <div className="title__link">
                세미나실 &nbsp;&nbsp; 스튜디오
            </div>
          </div>
          <div className='title'>
            모임관리 &nbsp;<span>모임{}</span>
            <div>
            <img 
              className="mobile__underline" 
              src="/assets/images/Underline.svg" 
              width="120px" 
              height="2px" 
            />
            </div>
            <div className="mobile__title__info">모임{}<br/>내 모임</div>
            <img 
              className="desktop__underline" 
              src="/assets/images/Underline.svg"  
            />
            <div className="title__link">
                <span>내 모임</span>
            </div>
          </div>    
        </MainTopWrap>  
    );
};

export default MainTop;