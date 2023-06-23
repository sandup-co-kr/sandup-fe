import styled from "@emotion/styled";
import { Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import handleGoBack from "../../utils/Common/handleGoBack";

// TODO: Need to fix design
const GoBackButton = styled(IconButton)`
  background-image: url("${process.env.PUBLIC_URL}/assets/goBackButton.png");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  isolation: isolate;

  position: absolute;
  width: 48px;
  height: 48px;
  left: 10px;
  top: 51px;
`;

const Title = styled(Typography)`
  position: absolute;
  width: 190px;
  height: 55px;
  left: calc(50% - 185px / 2 - 59.5px);
  top: 114px;

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
  position: absolute;
  width: 248px;
  height: 33px;
  left: calc(50% - 248px / 2 - 28px);
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
  left: "28px",
  top: "289px",
}));

const CheckButton2 = styled(Button)(() => ({
  position: "absolute",
  left: "28px",
  top: "334px",
}));

const CheckButton3 = styled(Button)(() => ({
  position: "absolute",
  left: "49px",
  top: "402px",
}));

const Terms = styled(Typography)`
  position: absolute;
  width: 55px;
  height: 10px;
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
  height: 10px;
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
  height: 10px;
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
  left: calc(50% - 26px / 2 + 143px);
  top: 291px;

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
  left: calc(50% - 26px / 2 + 143px);
  top: 337px;

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
  height: 10px;
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
  left: 28px;
  top: 383px;

  background: #f4f4f6;
  border-radius: 8px;
`;

const AgreeText = styled(Typography)`
  /* 모두 동의합니다. */

  position: absolute;
  width: 99px;
  height: 10px;
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
  left: 28px;
  top: 671px;

  background: #e7e7e7;
  border-radius: 25.5px;
`;

const SubmitText = styled(Typography)`
  /* 동의하기 */

  position: absolute;
  width: 55px;
  height: 10px;
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

function Register() {
  const [check1IsActive, setCheck1IsActive] = useState(false);
  const [check2IsActive, setCheck2IsActive] = useState(false);
  const [check3IsActive, setCheck3IsActive] = useState(false);

  const handleCheckButton1Click = () => {
    setCheck1IsActive(!check1IsActive);
    console.log("check button1 clicked");
  };

  const handleCheckButton2Click = () => {
    setCheck2IsActive(!check2IsActive);
    console.log("check button2 clicked");
  };

  const handleCheckButton3Click = () => {
    setCheck3IsActive(!check3IsActive);
    console.log("check button3 clicked");
  };

  return (
    <>
      <GoBackButton onClick={handleGoBack} />
      <Title>샌드업에 오신 것을 환영합니다</Title>
      <SubTitle>샌드업을 이용하시기 위해서는 약관동의가 필요합니다.</SubTitle>
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

      <AgreeButton />
      <CheckButton3 onClick={handleCheckButton3Click}>
        <CheckIcon
          src={
            check3IsActive
              ? process.env.PUBLIC_URL + "/assets/checkButtonChecked.png"
              : process.env.PUBLIC_URL + "/assets/checkButton.png"
          }
        />
      </CheckButton3>
      <AgreeText>모두 동의합니다.</AgreeText>

      <SubmitButton />
      <SubmitText>동의하기</SubmitText>
    </>
  );
}

export default Register;
