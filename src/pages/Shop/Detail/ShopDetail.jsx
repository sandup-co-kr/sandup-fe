import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/keys";
import getMagazineDetail from "../../../services/Magazine/Get/getMagazineDetail";
import styled from "@emotion/styled";
import getShopDetail from "../../../services/Shop/Get/getShopDetail";
import Footer from "../../../components/Common/Footer";

const Content = styled.div`
  width: 96%;
  height: 100%;
  padding: 4% 2%;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 340px;
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
  color: var(--unnamed, #0a81ce);
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
  height: 35px;
  width: 65%;
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
  margin-top: 28px;
`;

const ImgDetail = styled.img`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleSubContainer1 = styled.div`
  width: 60%;
`;

const TitleSubContainer2 = styled.div`
  width: 40%;
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
  text-align: right;
  color: var(--, #0a81ce);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 27px */
`;

const DiscountPrice = styled.p`
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
          src={`${process.env.PUBLIC_URL}/assets/goBackButtonWhite.svg`}
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
            <div
              style={{
                textAlign: "right",
                display: "flex",
                marginRight: "17px",
              }}
            >
              <Discount>{data.discount}</Discount>
              <DiscountPrice>
                {((data.price * (100 - data.discount)) / 100).toLocaleString()}
                원
              </DiscountPrice>
            </div>
          </TitleSubContainer2>
        </TitleContainer>
      </ThumbnailContainer>
      <BlankDiv style={{ marginTop: "110px" }} />
      <ImgDetail src={data.img_detail} />
      <Footer />
    </>
  );
};

export default ShopDetail;