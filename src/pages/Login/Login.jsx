import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginContainer = styled.div`
  position: relative;
`;

const LogoImage = styled.img`
  position: absolute;
  width: 179px;
  height: 66px;
  left: calc(50% - 179px / 2 - 0.5px);
  top: 152px;
`;

// Need to fix design

const IDInput = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 324px;
  height: 53px;
  left: 18px;
  top: 280px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const PWInput = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 324px;
  height: 53px;
  left: 18px;
  top: 343px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const LoginButton = styled(Button)`
  position: absolute;
  width: 324px;
  height: 60px;
  left: 18px;
  top: 412px;

  background: linear-gradient(
    91.55deg,
    #f0f6ff 5.02%,
    #deeeff 42.02%,
    #aed5ff 69.07%,
    #84aece 97.76%
  );

  border-radius: 30px;
`;

const RegisterButton = styled(Button)`
  position: absolute;
  width: 194px;
  height: 10px;
  left: calc(50% - 194px / 2 - 60px);
  top: 491px;
`;

const Or = styled(Button)`
  position: absolute;
  width: 194px;
  height: 10px;
  left: calc(50% - 194px / 2 - 27px);
  top: 491px;
  cursor: default;
`;

const FindInfoButton = styled(Button)`
  position: absolute;
  width: 194px;
  height: 10px;
  left: calc(50% - 194px / 2 + 40px);
  top: 491px;
`;

const EasyLoginText = styled.p`
  position: absolute;
  width: 69px;
  height: 10px;
  left: calc(50% - 69px / 2 - 0.5px);
  top: 604px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  leading-trim: both;
  text-edge: cap;

  color: #8e8e8e;
`;

const SocialLoginContainer = styled.div`
  top: 650px;
  position: absolute;
  display: flex;
  left: calc(50% - 194px / 2);
  justify-content: center;
  align-items: center;
`;

const SocialLoginButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SocialLoginIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic with id and password
    // ...
  };

  return (
    <LoginContainer>
      <LogoImage
        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
        alt="Logo"
        className="logo-image"
      />
      <form onSubmit={handleSubmit}>
        <IDInput
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
        <PWInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <LoginButton type="submit">로그인</LoginButton>
      </form>
      <RegisterButton>회원가입</RegisterButton>
      <Or>|</Or>
      <FindInfoButton>아이디/비밀번호 찾기</FindInfoButton>
      <EasyLoginText>간편 로그인</EasyLoginText>
      <SocialLoginContainer>
        <SocialLoginButton>
          <SocialLoginIcon />
        </SocialLoginButton>
        <SocialLoginButton>
          <SocialLoginIcon />
        </SocialLoginButton>
        <SocialLoginButton>
          <SocialLoginIcon />
        </SocialLoginButton>
      </SocialLoginContainer>
    </LoginContainer>
  );
};

export default Login;
