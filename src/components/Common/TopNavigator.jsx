import styled from "@emotion/styled";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { queryKeys } from "../../react-query/keys";
import getUserInfo from "../../ services/Common/Get/getUserInfo";
import { Typography } from "@mui/material";

const TopNavigatorContainer = styled.div`
  width: 100%;
  height: 67px;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 147px;
  height: 54px;
  top: 16px;
  left: 13px;
  position: absolute;
  flex-shrink: 0;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 32px;
  right: 22px;
`;

const UserName = styled.div`
  font-family: NanumSquare_ac;
  color: #6d97b2;
  margin-right: 10px;
  leading-trim: both;
  text-edge: cap;
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
`;

const Point = styled.div`
  font-family: NanumSquare_ac;
  color: #6d97b2;
  margin-right: 12px;
  leading-trim: both;
  text-edge: cap;
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
`;

const Alert = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const LoginButton = styled.div`
  width: 82px;
  height: 32px;
  flex-shrink: 0;
  position: fixed;
  top: 27px;
  right: 15px;
  display: flex;
`;

const LoginButtonIcon = styled.img`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  top: 9px;
  right: 59px;
  position: absolute;
`;

const LoginButtonText = styled(Typography)`
  width: 43px;
  height: 10px;
  top: 6px;
  right: 11px;
  position: absolute;
  color: var(--unnamed, #0a81ce);
  leading-trim: both;
  text-edge: cap;
  font-size: 15px;
  font-family: NanumSquare_ac;
  font-weight: 700;
  line-height: 150%;
`;

const TopNavigator = () => {
  const location = useLocation();
  const allowedRoutes = ["/", "/magazine", "/community", "/shop", "/mypage"];
  const isRouteAllowed = allowedRoutes.includes(location.pathname);

  const navigate = useNavigate();

  const phone = localStorage.getItem("phone") || undefined;
  const [userInfo, setUserInfo] = useState([]);

  const handleLogin = () => {
    navigate("/login");
  };

  const { isLoading: loadingList } = useQuery(
    [queryKeys.USER_INFO, phone],
    () => getUserInfo(phone),
    {
      onSuccess: (resultData) => {
        console.log("resultData: ", resultData);
        setUserInfo(resultData);
      },
      staleTime: 0,
    },
    [phone]
  );

  if (loadingList && !userInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    isRouteAllowed && (
      <TopNavigatorContainer>
        <Logo src={`${process.env.PUBLIC_URL}/assets/navLogoMain.png`} />
        {(userInfo && (
          <UserInfoContainer>
            <UserName>{userInfo.name}님</UserName>
            <Point>{userInfo.point}P</Point>
            <Alert src={`${process.env.PUBLIC_URL}/assets/alertDefault.svg`} />
          </UserInfoContainer>
        )) || (
          <LoginButton onClick={handleLogin}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/navLoginButton.png`}
              alt="Login Button"
            />
            <LoginButtonIcon
              src={`${process.env.PUBLIC_URL}/assets/navLoginIcon.svg`}
            />
            <LoginButtonText>Log In</LoginButtonText>
          </LoginButton>
        )}
      </TopNavigatorContainer>
    )
  );
};

export default TopNavigator;
