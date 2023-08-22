import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import { Box } from "@mui/material";
import getMagazineList from "../../ services/Magazine/Get/getMagazineList";
import getMagazineListRecommend from "../../ services/Magazine/Get/getMagazineListRecommend";

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
  width: 218px;
  height: 299px;
  flex-shrink: 0;

  border-radius: 9px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(216, 216, 216, 0.25);

  opacity: 0.3;
`;

const CardCategory = styled.p`
  height: 15px;
  width: 157px;
  margin-top: -160px;
  margin-left: 14px;
  color: #333;
  leading-trim: both;
  text-edge: cap;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const CardTitle = styled.p`
  height: 15px;
  width: 157px;
  color: #333;
  margin-left: 14px;
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
`;

const CardSubTitle = styled.p`
  margin-top: 30px;
  margin-left: 14px;
  margin-bottom: 0px;
  height: 33px;
  width: 157px;
  color: #575757;
  font-size: 13px;
  font-weight: 400;
  line-height: 150%;
`;

const CardStroke = styled.img`
  margin-left: 14px;
  width: 188.5px;
`;

const SubContainer = styled.div`
  margin-top: -7px;
  margin-left: 14px;
  width: 188.5px;
  display: flex;
  justify-content: space-between;
`;

const HeartContainer = styled.div`
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
  color: #c6c6c6;
  font-size: 13px;
  font-weight: 300;
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

const SmallCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const SmallCardImg = styled.img`
  width: 156px;
  height: 156px;
`;

const SmallCardCategory = styled.p`
  margin-top: -145px;
  margin-left: 15px;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const SmallCardTitle = styled.p`
  margin-top: 125px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const SmallCardSubTitle = styled.p`
  margin-top: -15px;
  width: 154px;
  height: 33px;
  flex-shrink: 0;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const SmallSubContainer = styled.div`
  margin-top: -20px;
  width: 154px;
  display: flex;
  justify-content: space-between;
`;

const SmallCardHeartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SmallCardLike = styled.p`
  margin-left: 4px;
  flex-shrink: 0;

  color: #838383;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
`;

const SmallCardDate = styled.p`
  color: #c6c6c6;
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
`;

const CategoryNavigator = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(0);
  const [data, setData] = useState([]);
  let recommendStack = 0;
  let lifestyleStack = 0;
  let issueStack = 0;
  let healthStack = 0;
  let personStack = 0;
  const categoryObj = {
    recommend: recommendStack,
    lifestyle: lifestyleStack,
    issue: issueStack,
    health: healthStack,
    person: personStack,
  };

  const handleNavClick = (active) => {
    setActiveNav(active);
  };

  const handleCardClick = (id) => {
    navigate(`/magazine/${id}`);
  };

  const { isLoading: loadingList } = useQuery(
    [queryKeys.MAGAZINE_LIST],
    () => getMagazineList(),
    {
      onSuccess: (resultData) => {
        setData(resultData);
      },
      staleTime: 0,
    }
  );

  const { isLoading: loadingListRecommend, data: recommendList } = useQuery(
    [queryKeys.MAGAZINE_LIST_RECOMMEND],
    () => getMagazineListRecommend(7),
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
            <NavbarLink exact to="/magazine">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 0
                      ? `/assets/recommendTextClicked.svg`
                      : `/assets/recommendTextUnClicked.svg`
                  }
                  alt="Recommend Text"
                />
                {activeNav === 0 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Recommend Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(1)}>
            <NavbarLink exact to="/magazine">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 1
                      ? `/assets/lifestyleTextClicked.svg`
                      : `/assets/lifestyleTextUnClicked.svg`
                  }
                  alt="Lifestyle Text"
                />
                {activeNav === 1 && (
                  <Bar src={`/assets/underbar6.svg`} alt="Line Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(2)}>
            <NavbarLink exact to="/magazine">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 2
                      ? `/assets/issueTextClicked.svg`
                      : `/assets/issueTextUnClicked.svg`
                  }
                  alt="Issue Text"
                />
                {activeNav === 2 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Issue Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(3)}>
            <NavbarLink exact to="/magazine">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 3
                      ? `/assets/healthTextClicked.svg`
                      : `/assets/healthTextUnClicked.svg`
                  }
                  alt="Health Text"
                />
                {activeNav === 3 && (
                  <Bar src={`/assets/underbar5.svg`} alt="Health Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(4)}>
            <NavbarLink exact to="/magazine">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 4
                      ? `/assets/personTextClicked.svg`
                      : `/assets/personTextUnClicked.svg`
                  }
                  alt="Person Text"
                />
                {activeNav === 4 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Person Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
      <RecommendText>관심사 추천 글</RecommendText>
      <Box sx={{ display: "flex", overflowX: "scroll" }}>
        {recommendList.map((item) => {
          let category = "";
          let categoryKor = "";
          let categoryColor = "";
          if (activeNav === 0) category = "recommend";
          if (activeNav === 1) category = "lifestyle";
          if (activeNav === 2) category = "issue";
          if (activeNav === 3) category = "health";
          if (activeNav === 4) category = "person";
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
          if (item.category === "person") {
            categoryKor = "인물";
            categoryColor = "#E7B400";
          }

          if (
            categoryObj[category] < 6 &&
            activeNav === 0 &&
            item.category !== "vote"
          ) {
            categoryObj[category]++;
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg src={item.main_img} alt={"Card Img"} />
                <CardCategory style={{ color: categoryColor }}>
                  {categoryKor}
                </CardCategory>
                <CardTitle>
                  {item.title.length > 11
                    ? `${item.title.slice(0, 11)}...`
                    : item.title}
                </CardTitle>
                <CardSubTitle>
                  {" "}
                  {item.subtitle.length > 26
                    ? `${item.subtitle.slice(0, 26)}...`
                    : item.subtitle}
                </CardSubTitle>
                <CardStroke src={"/assets/separateLineCard.svg"} />
                <SubContainer>
                  <HeartContainer>
                    <img src="assets/heartFill.svg" alt="Heart Icon" />
                    <Like>{item.likes}</Like>
                  </HeartContainer>
                  <Date>{item.date.split("T")[0].replaceAll("-", ".")}</Date>
                </SubContainer>
              </CardContainer>
            );
          }

          if (categoryObj[category] < 6 && item.category === category) {
            categoryObj[category]++;
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg src={item.main_img} alt={"Card Img"} />
                <CardCategory style={{ color: categoryColor }}>
                  {categoryKor}
                </CardCategory>
                <CardTitle>
                  {item.title.length > 11
                    ? `${item.title.slice(0, 11)}...`
                    : item.title}
                </CardTitle>
                <CardSubTitle>
                  {" "}
                  {item.subtitle.length > 26
                    ? `${item.subtitle.slice(0, 26)}...`
                    : item.subtitle}
                </CardSubTitle>
                <CardStroke src={"/assets/separateLineCard.svg"} />
                <SubContainer>
                  <HeartContainer>
                    <img src="assets/heartFill.svg" alt="Heart Icon" />
                    <Like>{item.likes}</Like>
                  </HeartContainer>
                  <Date>{item.date.split("T")[0].replaceAll("-", ".")}</Date>
                </SubContainer>
              </CardContainer>
            );
          }
          return null;
        })}
      </Box>
      <BlankDiv />
      <RecommendText>이런 글은 어떠세요?</RecommendText>
      <SmallCardContainer>
        {data.map((item) => {
          let categoryKor = "";
          let categoryColor = "";
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
          if (item.category === "person") {
            categoryKor = "인물";
            categoryColor = "#E7B400";
          }
          if (item.category === "vote") {
            categoryKor = "투표";
            categoryColor = "#FF0000";
          }
          return (
            <SmallCard onClick={() => handleCardClick(item.id)}>
              <SmallCardImg src={item.main_img} alt={"Card Img"} />
              <SmallCardCategory style={{ color: categoryColor }}>
                {categoryKor}
              </SmallCardCategory>
              <SmallCardTitle>
                {" "}
                {item.title.length > 11
                  ? `${item.title.slice(0, 11)}...`
                  : item.title}
              </SmallCardTitle>
              <SmallCardSubTitle>{item.subtitle}</SmallCardSubTitle>
              <SmallSubContainer>
                <SmallCardHeartContainer>
                  <img
                    style={{
                      marginTop: "-2.5px",
                      width: "13px",
                      height: "12px",
                    }}
                    src="assets/heartFill.svg"
                    alt="Heart Icon"
                  />
                  <SmallCardLike>{item.likes}</SmallCardLike>
                </SmallCardHeartContainer>
                <SmallCardDate>
                  {item.date.split("T")[0].replaceAll("-", ".")}
                </SmallCardDate>
              </SmallSubContainer>
            </SmallCard>
          );
        })}
      </SmallCardContainer>
      )
    </>
  );
};

export default CategoryNavigator;
