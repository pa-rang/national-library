import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #011e57;
  height: 52px;
  color: #fff;

  .nav-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .nav__menu {
    flex: 1;
  }

  .nav__logo {
    display: flex;
    align-items: center;
    flex: 3;
    margin-bottom: 15px;

    & > p {
      display: none;
      font-weight: 500;
      font-size: 15px;
      position: absolute;
      bottom: 22px;
      left: 290px;
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

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-container">
        <div className="nav__menu">
          <Image
            width="30px"
            height="30px"
            alt=""
            src="/assets/icons/MenuIcon.svg"
          />
        </div>
        <div className="nav__logo">
          <Image
            src="/assets/images/Logo.png"
            alt=""
            width="320px"
            height="100px"
          />
          <p>디지털도서관 예약시스템</p>
        </div>
        <div className="nav__logout">
          <span>로그아웃까지 </span>
          <span>298</span>
          <span>초</span>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
