import styled from "@emotion/styled";
import React from 'react';

const MainTopWrap = styled.div`
    width: 100%;
    height: 88px;
    background-color:#011E57;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
    .title{
      margin: auto 0px;
      color:white;
      font-size:12px;
    }
    .title__info{
      border-top: solid 0.1em white;
    color:#B6CAE5;
    font-size:10px;
    }

`;

function MainTop() {
    return (
        <>
          <MainTopWrap>
              <div className='title'>
                좌석예약
                <div className="title__info">예약{} 불이행{} <br/> 이용제한</div>
              </div>
              <div className='title'>
                공간예약
                <div className="title__info">예약{} 불이행{}<br />이용제한</div>
              </div>
              <div className='title'>
                좌석예약
                <div className="title__info">모임{}<br/>내 모임</div>
              </div>    
          </MainTopWrap>  
        </>
    );
};

export default MainTop;