import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/keys";
import getMagazineDetail from "../../../services/Magazine/Get/getMagazineDetail";
import styled from "@emotion/styled";

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
  margin-top: -110px;
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
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const Date = styled.p`
  margin-left: 17px;
  color: #fbfbfb;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
`;

const MagazineDetail = () => {
  const magazineId = window.location.href.split("/")[4];
  const { data, isLoading } = useQuery(
    [queryKeys.MAGAZINE_DETAIL],
    () => getMagazineDetail(magazineId),
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

  let category = "";

  if (data.category === "lifestyle") {
    category = "라이프스타일";
  } else if (data.category === "issue") {
    category = "이슈";
  } else if (data.category === "health") {
    category = "건강/뷰티";
  } else if (data.category === "person") {
    category = "인물";
  } else if (data.category === "vote") {
    category = "투표";
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
            data.main_img ||
            `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
          }
        />
        <Category>{category}</Category>
        <Title>{data.title}</Title>
        <Date>{data.date.replaceAll("-", ".").split("T")[0]}</Date>
      </ThumbnailContainer>
      <Content ref={contentRef} />
    </>
  );
};

export default MagazineDetail;
