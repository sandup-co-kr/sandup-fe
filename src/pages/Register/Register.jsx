import styled from "@emotion/styled";
import { Button, IconButton, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { queryKeys } from "../../react-query/keys";
import checkIdDuplicate from "../../services/Register/Get/checkIdDuplicate";
import { useQuery } from "react-query";
import checkPhoneDuplicate from "../../services/Register/Get/checkPhoneDuplicate";
import usePostRegisterMutation from "../../hooks/Register/usePostRegisterMutation";

const GoBackButton = styled(IconButton)`
  margin-left: 22px;
  margin-top: 34px;
  background: url("${process.env.PUBLIC_URL}/assets/goBackButtonGray.svg")
    no-repeat center/cover;
  width: 24px;
  height: 24px;
`;

const Title = styled(Typography)`
  width: 185px;
  height: 55px;
  margin-left: 28px;
  margin-top: 27px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 150%;
  leading-trim: both;
  text-edge: cap;

  color: #333333;
`;

const SubTitle = styled(Typography)`
  width: 248px;
  height: 33px;
  margin-left: 28px;
  margin-top: 38px;
  top: 207px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  leading-trim: both;
  text-edge: cap;

  color: #929292;
`;

const CheckIcon = styled.img`
  width: 17.6px;
  height: 13.4px;
`;

const CheckButton1 = styled(Button)(() => ({
  position: "absolute",
  left: `calc(50% - 280px / 2 - 31.5px)`,
  top: "289px",
}));

const CheckButton2 = styled(Button)(() => ({
  position: "absolute",
  left: `calc(50% - 280px / 2 - 31.5px)`,
  top: "334px",
}));

const CheckButton3 = styled(Button)(() => ({
  position: "absolute",
  left: `calc(50% - 240px / 2 - 31.5px)`,
  top: "402px",
}));

const Terms = styled(Typography)`
  position: absolute;
  width: 55px;
  white-space: nowrap;
  left: calc(50% - 52px / 2 - 93px);
  top: 291px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;

  leading-trim: both;
  text-edge: cap;

  color: #333333;
`;

const Essential1 = styled(Typography)`
  position: absolute;
  width: 36px;
  white-space: nowrap;
  left: calc(50% - 36px / 2 - 41px);
  top: 291px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #6d97b2;
`;

const Essential2 = styled(Typography)`
  position: absolute;
  width: 36px;
  white-space: nowrap;
  left: calc(50% - 36px / 2 + 60px);
  top: 336px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #6d97b2;
`;

const About1 = styled(Button)`
  /* 보기 */

  position: absolute;
  width: 26px;
  height: 10px;
  left: calc(50% - 46px / 2 + 143px);
  top: 296px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #797979;
`;

const About2 = styled(Button)`
  /* 보기 */

  position: absolute;
  width: 26px;
  height: 10px;
  left: calc(50% - 46px / 2 + 143px);
  top: 341px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #797979;
`;

const Consent = styled(Typography)`
  /* 개인정보 수집 및 이용동의 */

  position: absolute;
  width: 156px;
  white-space: nowrap;
  left: calc(50% - 154px / 2 - 42px);
  top: 336px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #333333;
`;

const AgreeButton = styled(Button)`
  /* Rectangle 414 */

  position: absolute;
  width: 308px;
  height: 51px;
  left: calc(50% - 230px / 2 - 31.5px);
  top: 389px;

  background: #f4f4f6;
  border-radius: 8px;
`;

const AgreeText = styled(Typography)`
  /* 모두 동의합니다. */

  position: absolute;
  width: 99px;
  white-space: nowrap;
  left: calc(50% - 99px / 2 - 31.5px);
  top: 404px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #333333;
`;

const SubmitButton = styled(Button)`
  /* Rectangle 417 */

  position: absolute;
  width: 308px;
  height: 51px;
  left: calc(50% - 300px / 2 + 1.5px);
  top: 677px;

  background: #e7e7e7;
  border-radius: 25.5px;
`;

const SubmitText = styled(Typography)`
  /* 동의하기 */

  position: absolute;
  width: 55px;
  white-space: nowrap;
  left: calc(50% - 55px / 2 + 1.5px);
  top: 692px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  /* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
  leading-trim: both;
  text-edge: cap;

  color: #8d8d8d;
`;

const Title2 = styled(Typography)`
  width: 250px;
  height: 55px;
  margin-top: 27px;
  margin-left: -45px;

  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 150%;
  leading-trim: both;
  text-edge: cap;

  color: #333333;
`;

const SubTitle2 = styled(Typography)`
  width: 248px;
  height: 33px;
  margin-top: -9px;
  margin-left: -45px;
  top: 207px;

  color: #929292;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const IDText = styled(Typography)`
  margin-left: -250px;
  margin-top: 10px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */

  &::after {
    content: "*";
    color: #1c6ea3;
  }
`;

const IDInput = styled.input`
  box-sizing: border-box;
  width: 297px;
  height: 47px;

  margin-top: 15px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const PWText = styled(Typography)`
  margin-left: -240px;
  margin-top: 30px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */

  &::after {
    content: "*";
    color: #1c6ea3;
  }
`;

const PWInput = styled.input`
  box-sizing: border-box;
  width: 297px;
  height: 47px;

  margin-top: 15px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const PWInputCheck = styled.input`
  box-sizing: border-box;
  width: 297px;
  height: 47px;

  margin-top: 9px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const PWValidText = styled(Typography)`
  margin-top: 9px;
  color: #c33838;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

const PhoneText = styled(Typography)`
  margin-left: -225px;
  margin-top: 30px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */

  &::after {
    content: "*";
    color: #1c6ea3;
  }
`;

const PhoneInput = styled.input`
  box-sizing: border-box;
  width: 297px;
  height: 47px;

  margin-top: 15px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const EmailText = styled(Typography)`
  margin-left: -260px;
  margin-top: 30px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const EmailContainer = styled.div`
  display: flex;
`;

const EmailInput = styled.input`
  box-sizing: border-box;
  width: 144px;
  height: 47px;
  margin-top: 15px;
  margin-right: 4px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const AtText = styled(Typography)`
  margin-top: 28px;
  color: #878787;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const EmailSelect = styled.select`
  box-sizing: border-box;
  width: 131px;
  height: 47px;
  margin-left: 4px;
  margin-top: 15px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 14px;

  color: #4b4b4b;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const SubmitButton2 = styled(Button)`
  /* Rectangle 417 */

  width: 308px;
  height: 51px;
  margin-top: 30px;

  background: #e7e7e7;
  border-radius: 25.5px;
  color: #8d8d8d;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmailOption = styled.option``;

const ImageContainer = styled.div`
  margin-top: 47px;
`;

const MainImgUpload = styled.input`
  margin-top: 47px;
  display: none;
`;

const NameText = styled(Typography)`
  margin-left: -270px;
  margin-top: 41px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const NameInput = styled.input`
  box-sizing: border-box;
  width: 297px;
  height: 47px;

  margin-top: 15px;

  border: 1px solid #e8e8e8;
  border-radius: 27.5px;

  text-indent: 20px;
`;

const GenderText = styled(Typography)`
  margin-left: -270px;
  margin-top: 23px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const GenderContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 297px;
  justify-content: space-between;
`;

const GenderButton = styled.input`
  width: 144px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 0px solid;
  background-color: ${(props) => (props.checked ? "#F0F6FF" : "#F9F9F9")};

  color: ${(props) => (props.checked ? "#1c6ea3" : "#878787")};
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const BirthText = styled(Typography)`
  margin-left: -245px;
  margin-top: 23px;
  color: #5c5c5c;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const BirthContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 297px;
  justify-content: space-between;
`;

const BirthYearInput = styled.input`
  width: 136px;
  height: 47px;
  flex-shrink: 0;

  border-radius: 25px;
  background: #f9f9f9;
  border: 0px solid;

  color: #a4a4a4;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */

  text-align: center;
`;

const BirthMonthInput = styled.input`
  width: 72px;
  height: 47px;
  flex-shrink: 0;

  border-radius: 25px;
  background: #f9f9f9;
  border: 0px solid;

  color: #a4a4a4;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */

  text-align: center;
`;

const BirthDayInput = styled.input`
  width: 70px;
  height: 47px;
  flex-shrink: 0;

  border-radius: 25px;
  background: #f9f9f9;
  border: 0px solid;

  color: #a4a4a4;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */

  text-align: center;a
`;

const SubmitButton3 = styled(Button)`
  /* Rectangle 417 */

  width: 308px;
  height: 51px;
  margin-top: 30px;

  background: #e7e7e7;
  border-radius: 25.5px;
  color: #8d8d8d;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

function Register() {
  const [pageNo, setPageNo] = useState(1);
  const [check1IsActive, setCheck1IsActive] = useState(false);
  const [check2IsActive, setCheck2IsActive] = useState(false);
  const [check3IsActive, setCheck3IsActive] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwCorrect, setPwCorrect] = useState(true);
  const [pwValid, setPwValid] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [gender, setGender] = useState(0);

  const postRegisterMutation = usePostRegisterMutation();

  const emailDomains = [
    "naver.com",
    "hanmail.net",
    "daum.net",
    "gmail.com",
    "nate.com",
    "hotmail.com",
    "yahoo.com",
  ];

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleCheckButton1Click = () => {
    setCheck1IsActive(!check1IsActive);
    console.log("check button1 clicked");
    if (check1IsActive === true) {
      setCheck3IsActive(false);
    } else if (check2IsActive === true) {
      setCheck3IsActive(true);
    }
  };

  const handleCheckButton2Click = () => {
    setCheck2IsActive(!check2IsActive);
    console.log("check button2 clicked");
    if (check2IsActive === true) {
      setCheck3IsActive(false);
    } else if (check1IsActive === true) {
      setCheck3IsActive(true);
    }
  };

  const handleCheckButton3Click = () => {
    setCheck3IsActive(!check3IsActive);
    console.log("check button3 clicked");
    if (check3IsActive === false) {
      setCheck1IsActive(true);
      setCheck2IsActive(true);
    } else {
      setCheck1IsActive(false);
      setCheck2IsActive(false);
    }
  };

  const handleSubmit = () => {
    if (pageNo === 1) {
      if (check1IsActive === true && check2IsActive === true) {
        console.log("submit success");
        setPageNo(2);
      } else {
        alert("필수 약관에 동의해주세요");
      }
    } else if (pageNo === 2) {
      if (isIdDuplicate) {
        alert("중복된 아이디입니다.");
      } else if (id === "") {
        alert("아이디를 입력해주세요");
      } else if (pw === "") {
        alert("비밀번호를 입력해주세요");
      } else if (pwCheck === "") {
        alert("비밀번호 확인을 입력해주세요");
      } else if (pwValid === false) {
        alert("비밀번호는 8자 이상의 영문과 숫자 조합이어야 합니다.");
      } else if (pwCorrect === false) {
        alert("비밀번호가 일치하지 않습니다.");
      } else if (phone === "" || phone.length < 13) {
        alert("휴대폰 번호를 입력해주세요");
      } else if (isPhoneDuplicate) {
        alert("중복된 휴대폰 번호입니다.");
      } else if (email !== "" && selectedDomain === "") {
        alert("이메일 도메인을 선택해주세요");
      } else {
        console.log("submit success");
        setPageNo(3);
      }
    }
  };

  const handleGoBack = () => {
    console.log("go back button clicked");
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    } else {
      window.history.back();
    }
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const { data: isIdDuplicate } = useQuery(
    [queryKeys.CHECK_ID_DUPLICATE, id],
    () => checkIdDuplicate(id),
    {
      staleTime: 0,
    }
  );

  const { data: isPhoneDuplicate } = useQuery(
    [queryKeys.CHECK_PHONE_DUPLICATE, phone],
    () => checkPhoneDuplicate(phone.replaceAll("-", "")),
    {
      staleTime: 0,
    }
  );

  const validatePassword = (pw) => {
    const regex = /^[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?/~`]{8,}$/;
    return regex.test(pw);
  };

  const samePassword = (pw, pwCheck) => {
    return pw === pwCheck;
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
    if (validatePassword(e.target.value)) {
      console.log("pw valid");
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleCheckPwChange = (e) => {
    setPwCheck(e.target.value);
    if (samePassword(pw, e.target.value)) {
      console.log("pw correct");
      setPwCorrect(true);
    } else {
      setPwCorrect(false);
    }
  };

  const formatPhoneNumber = (value) => {
    const cleanValue = value.replace(/\D/g, "");
    const formattedValue = cleanValue.replace(
      /(\d{3})(\d{4})(\d{4})/,
      "$1-$2-$3"
    );
    return formattedValue;
  };

  const handlePhoneChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhone(formattedPhoneNumber);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImgChange = (e) => {
    setFile(URL?.createObjectURL(e.target.files[0]));
  };

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append("img", document.getElementById("fileInput").files[0]);
    formData.append("id", id);
    formData.append("pw", pw);
    formData.append("phone", phone);
    formData.append("email", email + "@" + selectedDomain);
    formData.append("name", e.target.name.value);
    formData.append("gender", gender);
    formData.append(
      "birth",
      e.target.birthYear.value &&
        e.target.birthMonth.value &&
        e.target.birthDay.value
        ? e.target.birthYear.value +
            "-" +
            e.target.birthMonth.value +
            "-" +
            e.target.birthDay.value
        : "0000-01-01"
    );
    postRegisterMutation.mutate(formData);
    alert("회원가입이 완료되었습니다.");
    e.preventDefault();
    window.location.href = "/login";
  };

  return (
    <form onSubmit={handleUpload}>
      <GoBackButton onClick={handleGoBack} />
      {pageNo === 1 && (
        <>
          <Title>샌드업에 오신 것을 환영합니다</Title>
          <SubTitle>
            샌드업을 이용하시기 위해서는 약관동의가 필요합니다.
          </SubTitle>

          <CheckButton1 onClick={handleCheckButton1Click}>
            <CheckIcon
              src={
                check1IsActive
                  ? process.env.PUBLIC_URL + "/assets/checkButtonChecked.png"
                  : process.env.PUBLIC_URL + "/assets/checkButton.png"
              }
            />
          </CheckButton1>
          <Terms>이용약관</Terms>
          <Essential1>(필수)</Essential1>
          <About1>보기</About1>

          <CheckButton2 onClick={handleCheckButton2Click}>
            <CheckIcon
              src={
                check2IsActive
                  ? process.env.PUBLIC_URL + "/assets/checkButtonChecked.png"
                  : process.env.PUBLIC_URL + "/assets/checkButton.png"
              }
            />
          </CheckButton2>
          <Consent>개인정보 수집 및 이용동의</Consent>
          <Essential2>(필수)</Essential2>
          <About2>보기</About2>
          <AgreeButton onClick={handleCheckButton3Click} />
          <CheckButton3 onClick={handleCheckButton3Click}>
            <CheckIcon
              src={
                check3IsActive
                  ? process.env.PUBLIC_URL + "/assets/checkButtonChecked.png"
                  : process.env.PUBLIC_URL + "/assets/checkButton.png"
              }
            />
          </CheckButton3>
          <AgreeText onClick={handleCheckButton3Click}>
            모두 동의합니다.
          </AgreeText>

          <SubmitButton onClick={handleSubmit} />
          <SubmitText onClick={handleSubmit}>동의하기</SubmitText>
        </>
      )}
      {pageNo === 2 && (
        <>
          <Container>
            <Title2>정보를 입력해주세요</Title2>
            <SubTitle2>* 표시는 필수 입력 정보입니다.</SubTitle2>

            <IDText>아이디 </IDText>

            <IDInput
              name="id"
              value={id}
              placeholder="아이디"
              onChange={handleIdChange}
            />
            {isIdDuplicate && (
              <PWValidText style={{ marginLeft: "-130px" }}>
                이미 사용중인 아이디입니다.
              </PWValidText>
            )}
            <PWText>비밀번호 </PWText>

            <PWInput
              name="pw"
              value={pw}
              type="password"
              placeholder="비밀번호"
              onChange={handlePwChange}
            />

            <PWInputCheck
              value={pwCheck}
              type="password"
              placeholder="비밀번호 확인"
              onChange={handleCheckPwChange}
            />

            {!pwValid && (
              <PWValidText>
                비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.
              </PWValidText>
            )}
            {!pwCorrect && (
              <PWValidText>비밀번호가 일치하지 않습니다.</PWValidText>
            )}

            <PhoneText>휴대폰 번호 </PhoneText>
            <PhoneInput
              type="tel"
              placeholder="휴대폰 번호"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={13}
            />
            {isPhoneDuplicate && (
              <PWValidText style={{ marginLeft: "-130px" }}>
                이미 사용중인 휴대폰 번호입니다.
              </PWValidText>
            )}

            <EmailText>이메일 </EmailText>

            <EmailContainer>
              <EmailInput
                name="email1"
                value={email}
                placeholder="이메일"
                onChange={handleEmailChange}
              />
              <AtText>@</AtText>
              <EmailSelect
                name="email2"
                value={selectedDomain}
                onChange={handleDomainChange}
                placeholder="선택"
              >
                <EmailOption value="" disabled>
                  선택
                </EmailOption>
                {emailDomains.map((domain) => (
                  <EmailOption key={domain} value={domain}>
                    {domain}
                  </EmailOption>
                ))}
              </EmailSelect>
            </EmailContainer>

            <SubmitButton2 onClick={handleSubmit}>다음단계</SubmitButton2>
          </Container>
        </>
      )}
      {pageNo === 3 && (
        <>
          <Container>
            <Title2>프로필을 만들어주세요</Title2>
            <ImageContainer>
              <label for="fileInput" class="image-button">
                {file === null ? (
                  <img
                    style={{ width: "143px", height: "143px" }}
                    src={`${process.env.PUBLIC_URL}/assets/profileImg.svg`}
                    alt="Upload Img"
                  />
                ) : (
                  <img
                    style={{
                      width: "143px",
                      height: "143px",
                      borderRadius: "50%",
                    }}
                    src={file}
                    alt="Upload Img"
                  />
                )}
              </label>
              <MainImgUpload
                id="fileInput"
                type="file"
                name="img"
                onChange={handleImgChange}
              />
            </ImageContainer>
            <NameText>이름</NameText>
            <NameInput name="name" placeholder="이름" />
            <GenderText>성별</GenderText>
            <GenderContainer>
              <GenderButton
                type="button"
                checked={gender === 1}
                value={"남성"}
                onClick={() => {
                  setGender(1);
                }}
              />
              <GenderButton
                type="button"
                checked={gender === 2}
                value={"여성"}
                onClick={() => {
                  setGender(2);
                }}
              />
            </GenderContainer>

            <BirthText>생년월일</BirthText>
            <BirthContainer>
              <BirthYearInput
                name="birthYear"
                maxLength={4}
                placeholder="년(4자리)"
              />
              <BirthMonthInput
                name="birthMonth"
                maxLength={2}
                placeholder="월"
              />
              <BirthDayInput name="birthDay" maxLength={2} placeholder="일" />
            </BirthContainer>
            <label for="submit">
              <SubmitButton3 type="submit" id="submit">
                완료
              </SubmitButton3>
            </label>
          </Container>
        </>
      )}
    </form>
  );
}

export default Register;
