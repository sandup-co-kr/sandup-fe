import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/keys";
import styled from "@emotion/styled";
import getShopDetail from "../../../services/Shop/Get/getShopDetail";
import Footer from "../../../components/Common/Footer";

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const GoBackButton = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Category = styled.p`
  margin-left: 17px;
  color: #a3a3a3;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const Title = styled.p`
  margin-top: -5px;
  margin-left: 17px;
  min-height: 35px;
  height: 100%;
  color: var(--, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;

const BlankDiv = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 8px;
`;

const ImgDetail = styled.img`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const TitleSubContainer1 = styled.div`
  width: 50%;
`;

const TitleSubContainer2 = styled.div`
  width: 50%;
`;

const Price = styled.p`
  text-align: right;
  margin-right: 17px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  text-decoration: line-through;
`;

const Discount = styled.p`
  margin-top: 21px;
  color: #0a81ce;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 27px */
`;

const DiscountPrice = styled.p`
  margin-left: 5px;
  margin-right: 17px;
  text-align: right;
  color: var(--active, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

const PriceContainer = styled.div`
  display: flex;
  margin-top: -25px;
  flex-direction: row-reverse;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NaverButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #1ec800;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  border: none;
`;

const CoupangButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #ff0000;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: none;
`;

const ShopDetail = () => {
  const shopId = window.location.href.split("/")[4];
  const { data, isLoading } = useQuery(
    [queryKeys.SHOP_DETAIL],
    () => getShopDetail(shopId),
    {
      staleTime: 0,
    }
  );

  const handleGoBack = () => {
    window.history.back();
  };

  const handleShopUrl = (link) => {
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      link = "http://" + link;
    }
    window.open(link);
  };

  const contentRef = useRef(null);

  useEffect(() => {
    if (!isLoading && data && contentRef.current) {
      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(data.html, "text/html");
      const imgTags = parsedHtml.querySelectorAll("img");

      imgTags.forEach((img) => {
        img.style.width = "100%"; // Set the width to 100% of the parent container
      });

      contentRef.current.innerHTML = parsedHtml.documentElement.innerHTML;
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ThumbnailContainer>
        <GoBackButton
          src={`${process.env.PUBLIC_URL}/assets/goBackButtonBlue.svg`}
          onClick={handleGoBack}
        />
        <Thumbnail
          src={
            data.img || `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
          }
        />
        <TitleContainer>
          <TitleSubContainer1>
            <Category>{data.seller}</Category>
            <Title>{data.name}</Title>
          </TitleSubContainer1>
          <TitleSubContainer2>
            <Price>{data.price.toLocaleString()}원</Price>
            <PriceContainer>
              <DiscountPrice>
                {((data.price * (100 - data.discount)) / 100).toLocaleString()}
                원
              </DiscountPrice>
              <Discount>{data.discount}%</Discount>
            </PriceContainer>
          </TitleSubContainer2>
        </TitleContainer>
      </ThumbnailContainer>
      <BlankDiv />
      <ImgDetail src={data.img_detail} />
      <ButtonContainer>
        <NaverButton onClick={() => handleShopUrl(data.naver)}>
          네이버 쇼핑에서 보기
        </NaverButton>
        <CoupangButton onClick={() => handleShopUrl(data.coupang)}>
          쿠팡에서 보기
        </CoupangButton>
      </ButtonContainer>
      <Footer />
    </>
  );
};

export default ShopDetail;
