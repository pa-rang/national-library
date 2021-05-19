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
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 6px;
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
            width="18px"
            height="16px"
            alt=""
            src="/assets/icons/MenuIcon.png"
          />
        </div>
        <div className="nav__logo">
          <Image
            src="/assets/images/Logo.png"
            alt=""
            width="200px"
            height="60px"
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
