import styled from "@emotion/styled";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import useLoginMutation from "../../hooks/Login/useLoginMutation";

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

const IDInput = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 324px;
  height: 53px;
  left: calc(50% - 324px / 2);
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
  left: calc(50% - 324px / 2);
  top: 343px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const LoginButton = styled(Button)`
  position: absolute;
  width: 324px;
  height: 60px;
  left: calc(50% - 324px / 2);
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
  width: 70px;
  height: 10px;
  left: calc(50% - 60px / 2 - 71px);
  top: 491px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;

  leading-trim: both;
  text-edge: cap;

  color: #6d97b2;
`;

const Or = styled(Typography)`
  position: absolute;
  width: 0px;
  height: 3.5px;
  left: calc(50% - 0px / 2 - 33px);
  top: 494.5px;

  border: 1px solid #6d97b2;
`;

const FindInfoButton = styled(Button)`
  position: absolute;
  width: 150px;
  height: 10px;
  left: calc(50% - 150px / 2 + 42px);
  top: 491px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;

  leading-trim: both;
  text-edge: cap;

  color: #6d97b2;
`;

const EasyLoginText = styled(Typography)`
  position: absolute;
  width: 74px;
  height: 10px;
  left: calc(50% - 74px / 2);
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

const SocialLoginContainer = styled(Box)`
  top: 670px;
  position: absolute;
  display: flex;
  left: calc(50% - 222px / 2);
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
  position: absolute;
  width: 56.78px;
  height: 56.78px;
`;

const LoginFailedModal = styled.div`
  position: absolute;
  width: 293px;
  height: 149px;
  left: calc(50% - 345px / 2 + 2.5px);
  top: calc(50% - 201px / 2 - 2.5px);

  background: #ffffff;
  border-radius: 15px;

  padding: 26px;
`;

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("id: ", id, "password: ", pw);
    localStorage.setItem("phone", "");
    await loginMutation.mutateAsync({ id, pw });
    const phone = localStorage.getItem("phone");
    if (phone) window.location.href = "/";
    else setIsLoginFailed(true);
  };

  const handleModalClose = () => {
    setIsLoginFailed(false);
  };

  const handelRegister = () => {
    navigate("/register");
  };

  return (
    <LoginContainer>
      <LogoImage src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <IDInput
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
        <PWInput
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호"
        />
        <LoginButton type="submit">로그인</LoginButton>
      </form>
      <RegisterButton onClick={handelRegister}>회원가입</RegisterButton>
      <Or />
      <FindInfoButton>아이디/비밀번호 찾기</FindInfoButton>
      <EasyLoginText>간편 로그인</EasyLoginText>
      <SocialLoginContainer>
        <SocialLoginButton>
          <SocialLoginIcon
            src={`${process.env.PUBLIC_URL}/assets/kakaoLoginButton.png`}
            alt="Kakao Login"
          />
        </SocialLoginButton>
        <SocialLoginButton>
          <SocialLoginIcon
            src={`${process.env.PUBLIC_URL}/assets/naverLoginButton.png`}
            alt="Kakao Login"
          />
        </SocialLoginButton>
        <SocialLoginButton>
          <SocialLoginIcon
            src={`${process.env.PUBLIC_URL}/assets/googleLoginButton.png`}
            alt="Kakao Login"
          />
        </SocialLoginButton>
      </SocialLoginContainer>
      <Modal open={isLoginFailed} onClose={handleModalClose}>
        <LoginFailedModal>
          <Typography variant="h6">로그인 실패</Typography>
          <Typography variant="body1">
            아이디/비밀번호가 일치하지 않습니다.
            <br />
            다시 한 번 확인해주세요.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{ marginTop: "40px", marginLeft: "65px" }}
          >
            아이디/비밀번호 찾기
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "40px", marginLeft: "10px" }}
            onClick={handleModalClose}
          >
            확인
          </Button>
        </LoginFailedModal>
      </Modal>
      <div style={{ height: "800px" }} />
    </LoginContainer>
  );
};

export default Login;
