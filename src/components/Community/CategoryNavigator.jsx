import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import { Box } from "@mui/material";
import Footer from "../Common/Footer";
import getCommunityList from "../../services/Community/Get/getCommunityList";
import getCommunityListRecommend from "../../services/Community/Get/getCommunityListRecommend";

const NavbarContainer = styled.div`
  margin-top: 30px;
  height: 40px;
  background: #fff;
  left: 0;
  right: 0;
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-around;
`;

const NavbarListItem = styled.li`
  /* Your styles for the list item */
`;

const NavbarLink = styled(NavLink)`
  /* Your styles for the NavLink */
`;

const NavIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #adcef4;
  leading-trim: both;
  text-edge: cap;
  font-size: 10px;
  font-family: NanumSquare_ac;
  line-height: 150%;
`;

const Text = styled.img``;

const Bar = styled.img`
  margin-top: 5px;
`;

const CardContainer = styled.div`
  margin-left: 10px;
  width: 218px;
  height: 299px;
`;

const CardImg = styled.img`
  width: 206px;
  height: 206px;
  flex-shrink: 0;
  border-radius: 8px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const CardCategory = styled.p`
  height: 15px;
  width: 157px;
  margin-top: -195px;
  margin-left: 14px;
  color: #333;
  leading-trim: both;
  text-edge: cap;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const CardTitle = styled.p`
  margin-top: 195px;
  margin-left: 7px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const CardAuthor = styled.p`
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 22.5px */
`;

// const CardStroke = styled.img`
//   margin-left: 14px;
//   width: 188.5px;
// `;

const SubContainer = styled.div`
  margin-top: -25px;
  margin-left: 6px;
  width: 188.5px;
  display: flex;
`;

const HeartContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const Like = styled.p`
  margin-left: 4px;
  color: #a3a3a3;
  font-size: 13px;
  font-weight: 300;
`;

const Date = styled.p`
  margin-left: 10px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 22.5px */
`;

const BlankDiv = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 8px;
  margin-top: 28px;
`;

const RecommendText = styled.p`
  margin-left: 14px;
  color: var(--active, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;

const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecentCardContainer = styled.div`
  margin-left: 14px;
  display: flex;
  justify-content: space-between;
`;

const RecentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecentFlexContainer = styled.div`
  display: flex;
`;

const RecentCategory = styled.p`
  color: var(--unnamed, #0a81ce);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const RecentTitle = styled.p`
  margin-left: 6px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const RecentAuthor = styled.p`
  margin-top: -10px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 21px */
`;

const RecentDate = styled.p`
  margin-top: -10px;
  margin-left: 8px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 21px */
`;

const RecentHeart = styled.img`
  margin-top: -5px;
  width: 13px;
  height: 12px;
  flex-shrink: 0;
`;

const RecentLike = styled.p`
  margin-top: -8px;
  margin-left: 4px;
  color: #838383;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
`;

const RecentImg = styled.img`
  margin-top: 14px;
  margin-right: 14px;
  width: 59px;
  height: 59px;
  flex-shrink: 0;
  border-radius: 8px;
`;

const SeparateLine = styled.img`
  width: 95%;
  align-self: center;
`;

const CategoryNavigator = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(0);
  const [data, setData] = useState([]);
  let recommendStack = 0;
  let lifestyleStack = 0;
  let issueStack = 0;
  let healthStack = 0;
  let tourStack = 0;
  let categoryCount = 0;
  const categoryObj = {
    recommend: recommendStack,
    lifestyle: lifestyleStack,
    issue: issueStack,
    health: healthStack,
    tour: tourStack,
  };

  const handleNavClick = (active) => {
    setActiveNav(active);
  };

  const handleCardClick = (id) => {
    navigate(`/community/${id}`);
  };

  const { isLoading: loadingList } = useQuery(
    [queryKeys.COMMUNITY_LIST],
    () => getCommunityList(),
    {
      onSuccess: (resultData) => {
        setData(resultData);
      },
      staleTime: 0,
    }
  );

  const { isLoading: loadingListRecommend, data: recommendList } = useQuery(
    [queryKeys.COMMUNITY_LIST_RECOMMEND],
    () => getCommunityListRecommend(7),
    {
      staleTime: 0,
    }
  );

  if ((loadingList && !data[0]) || loadingListRecommend) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarListItem onClick={() => handleNavClick(0)}>
            <NavbarLink exact to="/community">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 0
                      ? `${process.env.PUBLIC_URL}/assets/recommendTextClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/recommendTextUnClicked.svg`
                  }
                  alt="Recommend Text"
                />
                {activeNav === 0 && (
                  <Bar
                    src={`${process.env.PUBLIC_URL}/assets/underbar2.svg`}
                    alt="Recommend Underbar"
                  />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(1)}>
            <NavbarLink exact to="/community">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 1
                      ? `${process.env.PUBLIC_URL}/assets/lifestyleTextClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/lifestyleTextUnClicked.svg`
                  }
                  alt="Lifestyle Text"
                />
                {activeNav === 1 && (
                  <Bar
                    src={`${process.env.PUBLIC_URL}/assets/underbar6.svg`}
                    alt="Line Underbar"
                  />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(2)}>
            <NavbarLink exact to="/community">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 2
                      ? `${process.env.PUBLIC_URL}/assets/issueTextClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/issueTextUnClicked.svg`
                  }
                  alt="Issue Text"
                />
                {activeNav === 2 && (
                  <Bar
                    src={`${process.env.PUBLIC_URL}/assets/underbar2.svg`}
                    alt="Issue Underbar"
                  />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(3)}>
            <NavbarLink exact to="/community">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 3
                      ? `${process.env.PUBLIC_URL}/assets/healthTextClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/healthTextUnClicked.svg`
                  }
                  alt="Health Text"
                />
                {activeNav === 3 && (
                  <Bar
                    src={`${process.env.PUBLIC_URL}/assets/underbar5.svg`}
                    alt="Health Underbar"
                  />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(4)}>
            <NavbarLink exact to="/community">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 4
                      ? `${process.env.PUBLIC_URL}/assets/tourTextClicked.svg`
                      : `${process.env.PUBLIC_URL}/assets/tourTextUnClicked.svg`
                  }
                  alt="Tour Text"
                />
                {activeNav === 4 && (
                  <Bar
                    src={`${process.env.PUBLIC_URL}/assets/underbar2.svg`}
                    alt="Tour Underbar"
                  />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
      {activeNav === 0 ? (
        <RecommendText>관심사 추천 글</RecommendText>
      ) : (
        <RecommendText>인기 글</RecommendText>
      )}
      <Box sx={{ height: "320px", display: "flex", overflowX: "scroll" }}>
        {recommendList.map((item) => {
          let category = "";
          let categoryKor = "";
          let categoryColor = "";
          if (activeNav === 0) category = "recommend";
          if (activeNav === 1) category = "lifestyle";
          if (activeNav === 2) category = "issue";
          if (activeNav === 3) category = "health";
          if (activeNav === 4) category = "tour";
          if (item.category === "lifestyle") {
            categoryKor = "라이프스타일";
            categoryColor = "#0A81CE";
          }
          if (item.category === "issue") {
            categoryKor = "이슈";
            categoryColor = "#00BD57";
          }
          if (item.category === "health") {
            categoryKor = "건강/뷰티";
            categoryColor = "#EE87FF";
          }
          if (item.category === "tour") {
            categoryKor = "여행";
            categoryColor = "#904DFF";
          }

          if (
            categoryObj[category] < 6 &&
            activeNav === 0 &&
            item.category !== "vote"
          ) {
            categoryObj[category]++;
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg
                  src={
                    item.img ||
                    `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
                  }
                  alt={"Card Img"}
                />
                <CardCategory style={{ color: categoryColor }}>
                  {categoryKor}
                </CardCategory>
                <CardTitle>
                  {item.title.length > 11
                    ? `${item.title.slice(0, 11)}...`
                    : item.title}
                </CardTitle>
                <SubContainer>
                  <CardAuthor>{item.author}</CardAuthor>
                  <Date>{item.date.split("T")[0].replaceAll("-", ".")}</Date>
                </SubContainer>
                <SubContainer>
                  <HeartContainer>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/heartFill.svg`}
                      alt="Heart Icon"
                    />
                    <Like>{item.likes}</Like>
                  </HeartContainer>
                </SubContainer>
              </CardContainer>
            );
          }

          if (categoryObj[category] < 6 && item.category === category) {
            categoryObj[category]++;
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg
                  src={
                    item.img ||
                    `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
                  }
                  alt={"Card Img"}
                />
                <CardCategory style={{ color: categoryColor }}>
                  {categoryKor}
                </CardCategory>
                <CardTitle>
                  {item.title.length > 11
                    ? `${item.title.slice(0, 11)}...`
                    : item.title}
                </CardTitle>
                <SubContainer>
                  <CardAuthor>{item.author}</CardAuthor>
                  <Date>{item.date.split("T")[0].replaceAll("-", ".")}</Date>
                </SubContainer>
                <SubContainer>
                  <HeartContainer>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/heartFill.svg`}
                      alt="Heart Icon"
                    />
                    <Like>{item.likes}</Like>
                  </HeartContainer>
                </SubContainer>
              </CardContainer>
            );
          }
          return null;
        })}
      </Box>
      <BlankDiv />
      <RecommendText>최신 글</RecommendText>
      <RecentContainer>
        {data.map((item, index) => {
          let categoryKor = "";
          let categoryColor = "";
          let categoryNum = 0;
          if (item.category === "lifestyle") {
            categoryNum = 1;
            categoryKor = "라이프스타일";
            categoryColor = "#0A81CE";
          }
          if (item.category === "issue") {
            categoryNum = 2;
            categoryKor = "이슈";
            categoryColor = "#00BD57";
          }
          if (item.category === "health") {
            categoryNum = 3;
            categoryKor = "건강/뷰티";
            categoryColor = "#EE87FF";
          }
          if (item.category === "tour") {
            categoryNum = 4;
            categoryKor = "여행";
            categoryColor = "#904DFF";
          }
          if (activeNav === 0) {
            if (index !== 0) {
              return (
                <>
                  <SeparateLine
                    src={`${process.env.PUBLIC_URL}/assets/separateLine.svg`}
                  />
                  <RecentCardContainer onClick={() => handleCardClick(item.id)}>
                    <RecentTextContainer>
                      <RecentFlexContainer>
                        <RecentCategory style={{ color: categoryColor }}>
                          {"[" + categoryKor + "]"}
                        </RecentCategory>
                        <RecentTitle>{item.title}</RecentTitle>
                      </RecentFlexContainer>
                      <RecentFlexContainer>
                        <RecentAuthor>{item.author}</RecentAuthor>
                        <RecentDate>
                          {item.date.replaceAll("-", ".").split("T")[0]}
                        </RecentDate>
                      </RecentFlexContainer>
                      <RecentFlexContainer>
                        <RecentHeart
                          src={`${process.env.PUBLIC_URL}/assets/heartEmpty.svg`}
                        />
                        <RecentLike>{item.likes}</RecentLike>
                      </RecentFlexContainer>
                    </RecentTextContainer>
                    <RecentImg
                      src={
                        item.img ||
                        `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
                      }
                    />
                  </RecentCardContainer>
                </>
              );
            }
            return (
              <RecentCardContainer onClick={() => handleCardClick(item.id)}>
                <RecentTextContainer>
                  <RecentFlexContainer>
                    <RecentCategory style={{ color: categoryColor }}>
                      {"[" + categoryKor + "]"}
                    </RecentCategory>
                    <RecentTitle>{item.title}</RecentTitle>
                  </RecentFlexContainer>
                  <RecentFlexContainer>
                    <RecentAuthor>{item.author}</RecentAuthor>
                    <RecentDate>
                      {item.date.replaceAll("-", ".").split("T")[0]}
                    </RecentDate>
                  </RecentFlexContainer>
                  <RecentFlexContainer>
                    <RecentHeart
                      src={`${process.env.PUBLIC_URL}/assets/heartEmpty.svg`}
                    />
                    <RecentLike>{item.likes}</RecentLike>
                  </RecentFlexContainer>
                </RecentTextContainer>
                <RecentImg
                  src={
                    item.img ||
                    `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
                  }
                />
              </RecentCardContainer>
            );
          }

          if (categoryNum === activeNav) {
            if (categoryCount !== 0) {
              categoryCount++;
              return (
                <>
                  <SeparateLine
                    src={`${process.env.PUBLIC_URL}/assets/separateLine.svg`}
                  />
                  <RecentCardContainer onClick={() => handleCardClick(item.id)}>
                    <RecentTextContainer>
                      <RecentFlexContainer>
                        <RecentCategory style={{ color: categoryColor }}>
                          {"[" + categoryKor + "]"}
                        </RecentCategory>
                        <RecentTitle>{item.title}</RecentTitle>
                      </RecentFlexContainer>
                      <RecentFlexContainer>
                        <RecentAuthor>{item.author}</RecentAuthor>
                        <RecentDate>
                          {item.date.replaceAll("-", ".").split("T")[0]}
                        </RecentDate>
                      </RecentFlexContainer>
                      <RecentFlexContainer>
                        <RecentHeart
                          src={`${process.env.PUBLIC_URL}/assets/heartEmpty.svg`}
                        />
                        <RecentLike>{item.likes}</RecentLike>
                      </RecentFlexContainer>
                    </RecentTextContainer>
                    <RecentImg
                      src={
                        item.img ||
                        `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
                      }
                    />
                  </RecentCardContainer>
                </>
              );
            }
            categoryCount++;
            return (
              <RecentCardContainer onClick={() => handleCardClick(item.id)}>
                <RecentTextContainer>
                  <RecentFlexContainer>
                    <RecentCategory style={{ color: categoryColor }}>
                      {"[" + categoryKor + "]"}
                    </RecentCategory>
                    <RecentTitle>{item.title}</RecentTitle>
                  </RecentFlexContainer>
                  <RecentFlexContainer>
                    <RecentAuthor>{item.author}</RecentAuthor>
                    <RecentDate>
                      {item.date.replaceAll("-", ".").split("T")[0]}
                    </RecentDate>
                  </RecentFlexContainer>
                  <RecentFlexContainer>
                    <RecentHeart
                      src={`${process.env.PUBLIC_URL}/assets/heartEmpty.svg`}
                    />
                    <RecentLike>{item.likes}</RecentLike>
                  </RecentFlexContainer>
                </RecentTextContainer>
                <RecentImg
                  src={
                    item.img ||
                    `${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`
                  }
                />
              </RecentCardContainer>
            );
          }
          return null;
        })}
      </RecentContainer>
      <BlankDiv style={{ marginTop: "10px" }} />
      <Footer />
    </>
  );
};

export default CategoryNavigator;
