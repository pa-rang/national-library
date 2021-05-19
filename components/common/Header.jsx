import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import styled from "@emotion/styled";
import Image from "next/image";
import StyledButton from './StyledButton';

const HeaderWrapper = styled.header`
  width: 1200px;
  height: 84px;
  margin:0 auto;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: white;
  z-index: 2;
  #header_logo{
      margin-left:60px
  }
`;

const SideBarText = styled.p`
  margin: 16px auto;
  font-size: 16px;
  font-weight: bold;
  margin-left: 80px;
`;

function Header({nickname, photoUrl}) {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    return (
        <>
        <HeaderWrapper>
          <Image src="/assets/images/Menu.svg" width="55px" height="55px" alt="menu" onClick={showDrawer}/>
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
            <SideBarText>{nickname}</SideBarText>
            <hr />
            <StyledButton size="SMALL" appearance="white">로그아웃</StyledButton>
            <StyledButton size="SMALL" appearance="white">개인정보수정</StyledButton>
            <StyledButton size="SMALL" appearance="white">이용현황</StyledButton>
            <StyledButton size="SMALL" appearance="white">모임관리</StyledButton>
          </Drawer>
          <div id="header_logo">
            <Image src={'/assets/icons/Logo.svg'} width='136px' height='42px' />
          </div>       
        </HeaderWrapper>  
        </>
    );
};

export default Header;