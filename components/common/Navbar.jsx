import React, { useState } from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import StyledButton from './StyledButton';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.theme ? "white" : "#011e57;")};
  height: 52px;
  color: #57585A;
  .nav-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
  }
  .nav__menu { 
    flex: 1;
    cursor: pointer;
  }
  .nav__logo {
    display: flex;
    align-items: center;
    flex: 3;
    & > p {
      display: none;
      font-weight: 500px;
      font-size: 15px;
      margin-top: 40px;
    }
  }
  .nav__logout {
    display: none;
    font-size: 26px;
  }
  .nav__logout span:nth-of-type(2) {
    color: #fec108;
  }
  @media screen and (min-width: 1000px) {
    height: 84px;
    .nav-container {
      padding: 0;
    }
    .nav__logo {
      flex: 12; 
    }
    .nav__logo > p,
    .nav__logout {
        display: block;
    }
  }
`;

const Navbar = ({theme, nickname, photoUrl}) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    return (
        <NavbarWrapper theme={theme}>
        <div className="nav-container">
          <div className="nav__menu">
            <Image
              width="55px"
              height="55px"
              alt="menu"
              src="/assets/icons/Menu.svg" 
              onClick={showDrawer}
            />
            <Drawer
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
            <div style={{marginBottom:'40px', marginLeft:'190px'}} ><Image src="/assets/icons/Close.svg" width="24px" height="24px" onClick={onClose}/></div>
            <div style={{marginLeft:'68px'}}>
            {photoUrl ? (
            <Image src={photoUrl} width={68} height={68} />
            ) : (
            <Image src="/assets/images/EmptyProfile.svg" width={68} height={68} />
            )}
            </div>
            <p style={{fontSize:'16px', fontWeight:'bold', marginLeft:'80px'}}>{nickname}</p>
            <hr />
            <StyledButton size="SMALL" appearance="white">로그아웃</StyledButton>
            <StyledButton size="SMALL" appearance="white">개인정보수정</StyledButton>
            <StyledButton size="SMALL" appearance="white">이용현황</StyledButton>
            <StyledButton size="SMALL" appearance="white">모임관리</StyledButton>
            </Drawer>
          </div>
          <div className="nav__logo">
            <Image
              width="200px"
              height="60px"
              alt="logo"
              src="/assets/icons/Logo.svg" 
            />
            <p>디지털도서관 예약시스템</p>
          </div>
          <div className="nav__logout">
            <span>로그아웃까지</span>
            <span>298</span>
            <span>초</span>
          </div>  
        </div>
        </NavbarWrapper>
    );
};

export default Navbar;
