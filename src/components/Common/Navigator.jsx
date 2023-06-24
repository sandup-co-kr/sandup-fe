import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const NavbarContainer = styled.div`
  height: 92px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px -4px 4px 0px rgba(233, 233, 233, 0.25);
  position: fixed;
  bottom: -15px;
  left: 0;
  right: 0;
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-around;
`;

const NavbarListItem = styled.li`
  /* Your styles for the list item */
`;

const NavbarLink = styled(NavLink)`
  /* Your styles for the NavLink */
`;

const NavIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #adcef4;
  leading-trim: both;
  text-edge: cap;
  font-size: 10px;
  font-family: NanumSquare_ac;
  line-height: 150%;
`;

const Icon = styled.img`
  display: flex;
  width: 25px;
  height: 25px;
  padding: 1.523px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Text = styled.img`
  margin-top: 5px;
  width: 10px;
  height: 10px;
  color: #adcef4;
  leading-trim: both;
  text-edge: cap;
  font-size: 10px;
  font-family: NanumSquare_ac;
  line-height: 150%;
`;

const Navigator = () => {
  const location = useLocation();
  const allowedRoutes = ["/", "/magazine", "/community", "/shop", "/mypage"];
  const isRouteAllowed = allowedRoutes.includes(location.pathname);

  const [activeNav, setActiveNav] = useState(0);
  const handleNavClick = (active) => {
    setActiveNav(active);
  };

  return (
    isRouteAllowed && (
      <NavbarContainer className="navbar-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/navbarCover.png`}
          alt="Navbar Cover"
          className="navbar-cover-image"
        />
        <NavbarList>
          <NavbarListItem onClick={() => handleNavClick(0)}>
            <NavbarLink exact to="/" activeClassName="active">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 0
                      ? `${process.env.PUBLIC_URL}/assets/navMainIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navMainIcon.svg`
                  }
                  alt="Main Icon"
                />
                <Text
                  src={
                    activeNav === 0
                      ? `${process.env.PUBLIC_URL}/assets/navMainTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navMainText.png`
                  }
                  alt="Main Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(1)}>
            <NavbarLink exact to="/magazine" activeClassName="active">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 1
                      ? `${process.env.PUBLIC_URL}/assets/navMainIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navMainIcon.svg`
                  }
                  alt="Main Icon"
                />
                <Text
                  src={
                    activeNav === 1
                      ? `${process.env.PUBLIC_URL}/assets/navMainTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navMainText.png`
                  }
                  alt="Main Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(2)}>
            <NavbarLink exact to="/community" activeClassName="active">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 2
                      ? `${process.env.PUBLIC_URL}/assets/navMainIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navMainIcon.svg`
                  }
                  alt="Main Icon"
                />
                <Text
                  src={
                    activeNav === 2
                      ? `${process.env.PUBLIC_URL}/assets/navMainTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navMainText.png`
                  }
                  alt="Main Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(3)}>
            <NavbarLink exact to="/shop" activeClassName="active">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 3
                      ? `${process.env.PUBLIC_URL}/assets/navMainIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navMainIcon.svg`
                  }
                  alt="Main Icon"
                />
                <Text
                  src={
                    activeNav === 3
                      ? `${process.env.PUBLIC_URL}/assets/navMainTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navMainText.png`
                  }
                  alt="Main Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(4)}>
            <NavbarLink exact to="/mypage" activeClassName="active">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 4
                      ? `${process.env.PUBLIC_URL}/assets/navMainIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navMainIcon.svg`
                  }
                  alt="Main Icon"
                />
                <Text
                  src={
                    activeNav === 4
                      ? `${process.env.PUBLIC_URL}/assets/navMainTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navMainText.png`
                  }
                  alt="Main Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
    )
  );
};

export default Navigator;
