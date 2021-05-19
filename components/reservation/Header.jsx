import React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header__info {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;
  }

  .header__info span:nth-of-type(2n + 1) {
    color: #fec108;
  }

  .header__title {
    color: #011e57;
    font-weight: bold;
    font-size: 18px;
    margin-top: 31px;
  }

  .header__detail {
    margin-top: 2px;
    color: #767676;
    font-size: 12px;
  }

  @media screen and (min-width: 1000px) {
    .header__info {
      font-size: 30px;
    }

    .header__title {
      font-size: 34px;
      margin-top: 91px;
    }

    .header__detail {
      font-size: 18px;
    }
  }
`;

const userInfo = {
  name: "안소현",
  reservation: 0,
};

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header__info">
        <span>{userInfo.name}</span>
        <span>님 안녕하세요. 예약정보가 &nbsp;</span>
        <span>{userInfo.reservation} &nbsp;</span>
        <span>건 있습니다.</span>
      </div>
      <div className="header__title">스튜디오</div>
      <div className="header__detail">
        영상 . 음향 등 미디어 콘텐츠 창작 . 공유 공간
      </div>
    </HeaderWrapper>
  );
};

export default Header;
