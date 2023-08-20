import React, { useState } from "react";
import { queryKeys } from "../../react-query/keys";
import { useQuery } from "react-query";
import styled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router";
import CategoryNavigator from "../../components/Main/CategoryNavigator";
import getMagazineList from "../../ services/Magazine/Get/getMagazineList";
import getCommunityList from "../../ services/Community/Get/getCommunityList";
import Footer from "../../components/Common/Footer";
import getShopList from "../../ services/Shop/Get/getShopList";

const MainImage = styled.img`
  width: 100%;
  height: 487px;
  filter: brightness(0.45);
`;

const MainLink = styled.p`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 72.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #73b6ff;
  font-size: 20px;
  font-weight: 800;
  line-height: 150%;
`;

const MainTitle = styled.p`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;

const MainSubTitle = styled.p`
  width: 70%;
  z-index: 1;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;

const MainHyphen = styled.p`
  z-index: 1;
  position: absolute;
  top: 42.5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainContent = styled.p`
  width: 80%;
  z-index: 1;
  position: absolute;
  top: 57.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  line-height: 150%;
`;

const CommunityContainer = styled.div`
  height: 283px;
  display: flex;
  flex-direction: column;
`;

const CommunityHeader = styled.div`
  height: 84px;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
`;

const CommunityTitleContainer = styled.div`
  display: flex;
  margin-left: 18px;
  flex-direction: column;
`;

const CommunityTitle = styled.p`
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;

const CommunitySubTitle = styled.p`
  margin-top: -13px;
  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const CommunityMore = styled.p`
  margin-top: 20px;
  margin-right: 18px;
  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const CommunityCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 105.5px;
  margin-top: 8.5px;
`;

const CommunityCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  height: 100%;
`;

const CommunityCardFlexContainer = styled.div`
  display: flex;
`;

const CommunityCardTitle = styled.p`
  margin-top: 12px;
  margin-bottom: 0px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const CommunityCardAuthor = styled.p`
  margin-top: 0px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 22.5px */
`;

const CommunityCardDate = styled.p`
  margin-top: 0px;
  margin-left: 10px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 22.5px */
`;

const CommunityCardLikeComment = styled.p`
  margin-top: -4px;
  margin-left: 4px;
  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
`;

const CommunityCardImage = styled.img`
  width: 59px;
  height: 59px;
  margin-top: 14.5px;
  margin-right: 20px;
`;

const HeartContainer = styled.div`
  margin-top: -12px;
  display: flex;
`;

const CommentContainer = styled.div`
  margin-top: -12px;
  margin-left: 13px;
  display: flex;
`;

const BlankDiv = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 8px;
  margin-top: -0px;
`;

const ShopContainer = styled.div`
  height: 525px;
  display: flex;
  flex-direction: column;
`;

const ShopCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
`;

const ShopCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  width: 156px;
`;

const ShopCardImg = styled.img`
  width: 156px;
  height: 156px;
`;

const ShopCardName = styled.p`
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const ShopCardSeller = styled.p`
  margin-top: -15px;

  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const ShopCardPrice = styled.p`
  margin-top: -15px;

  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  text-decoration: line-through;
`;

const ShopCardDiscountContainer = styled.p`\
  display: flex;
`;

const ShopCardDiscount = styled.p`
  margin-top: -30px;
  color: var(--unnamed, #0a81ce);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 27px */
`;

const ShopCardDiscountedPrice = styled.p`
  margin-top: -30px;
  margin-left: 9px;

  color: var(--active, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;
const Main = () => {
  const navigate = useNavigate();
  const [userMainList, setUserMainList] = useState([]);

  const handleCarouselLinkClick = (id) => {
    navigate(`/magazine/${id}`);
  };

  const handleCommunityMoreClick = () => {
    window.location.href = "/community";
  };

  const handleCommunityCardClick = (id) => {
    navigate(`/community/${id}`);
  };

  const handleShopMoreClick = () => {
    window.location.href = "/shop";
  };

  const handleShopCardClick = (id) => {
    navigate(`/shop/${id}`);
  };

  const { isLoading: loadingMagazineList } = useQuery(
    [queryKeys.MAGAZINE_MAIN],
    () => getMagazineList(3),
    {
      onSuccess: (resultData) => {
        setUserMainList(resultData);
      },
      staleTime: 0,
    }
  );

  const { data: communityList, isLoading: loadingCommunityList } = useQuery(
    [queryKeys.COMMUNITY_MAIN],
    () => getCommunityList(2),
    {
      staleTime: 0,
    }
  );

  const { data: shopList, isLoading: loadingShopList } = useQuery(
    [queryKeys.SHOP_MAIN],
    () => getShopList(4),
    {
      staleTime: 0,
    }
  );

  if (
    (loadingMagazineList && !userMainList[0]) ||
    loadingCommunityList ||
    loadingShopList
  ) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {userMainList?.map((element) => (
          <div>
            <MainImage src={element.main_img} />
            <MainTitle>{element.title}</MainTitle>
            <MainSubTitle>{element.subtitle}</MainSubTitle>
            <MainHyphen>
              <img
                style={{ width: "15px" }}
                src={"./assets/mainTitleHyphen.svg"}
                alt="title_arrow"
              />
            </MainHyphen>
            <MainContent>
              {element.content?.split(".")[0]}
              {element.content?.split(".")[1]}
            </MainContent>
            <MainLink onClick={() => handleCarouselLinkClick(element.id)}>
              {element.link}
              <img
                style={{ width: "25px", marginLeft: "10px", marginTop: "1px" }}
                src={"./assets/mainTitleArrow.svg"}
                alt="title_arrow"
              />
            </MainLink>
          </div>
        ))}
      </Carousel>
      <CategoryNavigator />
      <CommunityContainer>
        <CommunityHeader>
          <CommunityTitleContainer>
            <CommunityTitle>소통하고 포인트 받아요</CommunityTitle>
            <CommunitySubTitle>가장 많이 소통한 글</CommunitySubTitle>
          </CommunityTitleContainer>
          <CommunityMore onClick={handleCommunityMoreClick}>
            더보기
          </CommunityMore>
        </CommunityHeader>
        {communityList?.map((element, index) => (
          <>
            {index !== 0 && (
              <img
                style={{ padding: "0px 20px" }}
                src="assets/separateLine.svg"
                alt="Separate Line"
              />
            )}
            <CommunityCard onClick={() => handleCommunityCardClick(element.id)}>
              <CommunityCardTitleContainer>
                <CommunityCardTitle>{element.title}</CommunityCardTitle>
                <CommunityCardFlexContainer>
                  <CommunityCardAuthor>{element.author}</CommunityCardAuthor>
                  <CommunityCardDate>
                    {element.date?.split("T")[0].replaceAll("-", ".")}
                  </CommunityCardDate>
                </CommunityCardFlexContainer>
                <CommunityCardFlexContainer>
                  <HeartContainer>
                    <img
                      style={{ width: "13px", height: "12px" }}
                      src="assets/heartEmpty.svg"
                      alt="heart"
                    />
                    <CommunityCardLikeComment>
                      {element.like}
                    </CommunityCardLikeComment>
                  </HeartContainer>
                  <CommentContainer>
                    <img
                      style={{
                        marginTop: "-1px",
                        width: "14px",
                        height: "14px",
                      }}
                      src="assets/comment.svg"
                      alt="comment"
                    />
                    <CommunityCardLikeComment>
                      {element.comment}
                    </CommunityCardLikeComment>
                  </CommentContainer>
                </CommunityCardFlexContainer>
              </CommunityCardTitleContainer>
              <CommunityCardImage
                src={element.img || "assets/imgUploadButton.svg"}
              />
            </CommunityCard>
          </>
        ))}
      </CommunityContainer>
      <BlankDiv />
      <ShopContainer>
        <CommunityHeader>
          <CommunityTitleContainer>
            <CommunityTitle>이 상품은 뭐지?</CommunityTitle>
            <CommunitySubTitle>
              칼럼에 등장한 상품들을 만나보세요
            </CommunitySubTitle>
          </CommunityTitleContainer>
          <CommunityMore onClick={handleShopMoreClick}>더보기</CommunityMore>
        </CommunityHeader>
        <ShopCardContainer>
          {shopList?.map((element) => (
            <ShopCard onClick={() => handleShopCardClick(element.id)}>
              <ShopCardImg src={element.img} />
              <ShopCardName>{element.name}</ShopCardName>
              <ShopCardSeller>{element.seller}</ShopCardSeller>
              <ShopCardPrice>{element.price}원</ShopCardPrice>
              <ShopCardDiscountContainer>
                <ShopCardDiscount>{element.discount}%</ShopCardDiscount>
                <ShopCardDiscountedPrice>
                  {(element.price * (100 - element.discount)) / 100}원
                </ShopCardDiscountedPrice>
              </ShopCardDiscountContainer>
            </ShopCard>
          ))}
        </ShopCardContainer>
      </ShopContainer>
      <Footer />
    </>
  );
};

export default Main;
