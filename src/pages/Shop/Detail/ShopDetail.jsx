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
        <Category>{data.seller}</Category>
        <Title>{data.name}</Title>
      </ThumbnailContainer>
      <BlankDiv style={{ marginTop: "100px" }} />
      <ImgDetail src={data.img_detail} />
      <Footer />
    </>
  );
};

export default ShopDetail;
