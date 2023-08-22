import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import { Box } from "@mui/material";
import getMagazineList from "../../services/Magazine/Get/getMagazineList";

const NavbarContainer = styled.div`
  margin-top: -27px;
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
`;

const CardImg = styled.img`
  width: 157px;
  height: 157px;
`;

const CardTitle = styled.p`
  height: 15px;
  width: 157px;
  color: #333;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
`;

const CardSubTitle = styled.p`
  height: 33px;
  width: 157px;
  color: #575757;
  font-size: 13px;
  font-weight: 400;
  line-height: 150%;
`;

const SubContainer = styled.div`
  margin-top: -12px;
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

const CategoryNavigator = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(0);
  const [data, setData] = useState([]);
  let lifestyleStack = 0;
  let issueStack = 0;
  let healthStack = 0;
  let personStack = 0;
  let voteStack = 0;
  const categoryObj = {
    lifestyle: lifestyleStack,
    issue: issueStack,
    health: healthStack,
    person: personStack,
    vote: voteStack,
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

  if (loadingList && !data[0]) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarListItem onClick={() => handleNavClick(0)}>
            <NavbarLink exact to="/">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 0
                      ? `/assets/lifestyleTextClicked.svg`
                      : `/assets/lifestyleTextUnClicked.svg`
                  }
                  alt="Lifestyle Text"
                />
                {activeNav === 0 && (
                  <Bar src={`/assets/underbar6.svg`} alt="Line Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(1)}>
            <NavbarLink exact to="/">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 1
                      ? `/assets/issueTextClicked.svg`
                      : `/assets/issueTextUnClicked.svg`
                  }
                  alt="Issue Text"
                />
                {activeNav === 1 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Issue Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(2)}>
            <NavbarLink exact to="/">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 2
                      ? `/assets/healthTextClicked.svg`
                      : `/assets/healthTextUnClicked.svg`
                  }
                  alt="Health Text"
                />
                {activeNav === 2 && (
                  <Bar src={`/assets/underbar5.svg`} alt="Health Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(3)}>
            <NavbarLink exact to="/">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 3
                      ? `/assets/personTextClicked.svg`
                      : `/assets/personTextUnClicked.svg`
                  }
                  alt="Person Text"
                />
                {activeNav === 3 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Person Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(4)}>
            <NavbarLink exact to="/">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 4
                      ? `/assets/voteTextClicked.svg`
                      : `/assets/voteTextUnClicked.svg`
                  }
                  alt="Vote Text"
                />
                {activeNav === 4 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Vote Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
      <Box sx={{ display: "flex", overflowX: "scroll" }}>
        {data.map((item) => {
          let category = "";
          if (activeNav === 0) category = "lifestyle";
          if (activeNav === 1) category = "issue";
          if (activeNav === 2) category = "health";
          if (activeNav === 3) category = "person";
          if (activeNav === 4) category = "vote";
          if (categoryObj[category] < 6 && item.category === category) {
            categoryObj[category]++;
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg src={item.main_img} alt={"Card Img"} />
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
                <SubContainer>
                  <HeartContainer>
                    <img src="assets/heart.svg" alt="Heart Icon" />
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
    </>
  );
};

export default CategoryNavigator;
