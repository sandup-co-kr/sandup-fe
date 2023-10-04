import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  z-index: 100;
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
  height: 10px;
  color: #adcef4;
  leading-trim: both;
  text-edge: cap;
  font-size: 10px;
  font-family: NanumSquare_ac;
  line-height: 150%;
`;

const BottomNavigator = () => {
  const location = useLocation();
  const allowedRoutes = ["/", "/magazine", "/community", "/shop", "/mypage"];
  const isRouteAllowed = allowedRoutes.includes(location.pathname);
  const isLoggedIn = localStorage.getItem("phone");

  let defaultActiveNav = 0;
  if (location.pathname === "/") defaultActiveNav = 0;
  if (location.pathname === "/magazine") defaultActiveNav = 1;
  if (location.pathname === "/community") defaultActiveNav = 2;
  if (location.pathname === "/shop") defaultActiveNav = 3;
  if (location.pathname === "/mypage") defaultActiveNav = 4;
  const [activeNav, setActiveNav] = useState(defaultActiveNav);

  const handleNavClick = (active) => {
    setActiveNav(active);
  };

  return (
    isRouteAllowed && (
      <NavbarContainer>
        <img
          src={`${process.env.PUBLIC_URL}/assets/navbarCover.png`}
          alt="Navbar Cover"
          className="navbar-cover-image"
        />
        <NavbarList>
          <NavbarListItem onClick={() => handleNavClick(0)}>
            <NavbarLink exact to="/">
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
            <NavbarLink exact to="/magazine">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 1
                      ? `${process.env.PUBLIC_URL}/assets/navMagazineIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navMagazineIcon.svg`
                  }
                  alt="Magazine Icon"
                />
                <Text
                  src={
                    activeNav === 1
                      ? `${process.env.PUBLIC_URL}/assets/navMagazineTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navMagazineText.png`
                  }
                  alt="Magazine Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(2)}>
            <NavbarLink exact to="/community">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 2
                      ? `${process.env.PUBLIC_URL}/assets/navCommunityIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navCommunityIcon.svg`
                  }
                  alt="Community Icon"
                />
                <Text
                  src={
                    activeNav === 2
                      ? `${process.env.PUBLIC_URL}/assets/navCommunityTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navCommunityText.png`
                  }
                  alt="Community Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(3)}>
            <NavbarLink exact to="/shop">
              <NavIconContainer>
                <Icon
                  src={
                    activeNav === 3
                      ? `${process.env.PUBLIC_URL}/assets/navShopIconClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/navShopIcon.svg`
                  }
                  alt="Shop Icon"
                />
                <Text
                  src={
                    activeNav === 3
                      ? `${process.env.PUBLIC_URL}/assets/navShopTextClicked.png`
                      : `${process.env.PUBLIC_URL}/assets/navShopText.png`
                  }
                  alt="Shop Icon"
                />
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          {isLoggedIn && (
            <NavbarListItem onClick={() => handleNavClick(4)}>
              <NavbarLink exact to="/mypage">
                <NavIconContainer>
                  <Icon
                    src={
                      activeNav === 4
                        ? `${process.env.PUBLIC_URL}/assets/navMypageIconClicked.svg`
                        : `${process.env.PUBLIC_URL}/assets/navMypageIcon.svg`
                    }
                    alt="Mypage Icon"
                  />
                  <Text
                    src={
                      activeNav === 4
                        ? `${process.env.PUBLIC_URL}/assets/navMypageTextClicked.png`
                        : `${process.env.PUBLIC_URL}/assets/navMypageText.png`
                    }
                    alt="Mypage Icon"
                  />
                </NavIconContainer>
              </NavbarLink>
            </NavbarListItem>
          )}
        </NavbarList>
      </NavbarContainer>
    )
  );
};

export default BottomNavigator;
