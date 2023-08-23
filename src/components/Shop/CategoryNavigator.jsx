import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import { Box } from "@mui/material";
import getMagazineList from "../../services/Magazine/Get/getMagazineList";
import getShopList from "../../services/Shop/Get/getShopList";
import Footer from "../Common/Footer";

const NavbarContainer = styled.div`
  margin-top: 0px;
  height: 40px;
  background: #fcfcfc;
  left: 0;
  right: 0;
  padding-top: 10px;
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
  margin-left: 14px;
`;

const CardImg = styled.img`
  width: 157px;
  height: 157px;
`;

const CardName = styled.p`
  margin-top: 14px;
  height: 15px;
  width: 157px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const CardSeller = styled.p`
  margin-top: -6px;
  height: 33px;
  width: 157px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const CardPrice = styled.p`
  margin-top: -24px;
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

const CardDiscountContainer = styled.div`
  display: flex;
`;

const CardDiscount = styled.p`
  margin-top: -14px;
  color: var(--unnamed, #0a81ce);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 27px */
`;

const CardDiscountText = styled.p`
  margin-top: -14px;
  margin-left: 9px;
  color: var(--unnamed, #333);
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

const ShopAd = styled.img``;

const SaleContainer = styled.div`
  display: flex;
`;

const SaleText = styled.p`
  margin-left: 25px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;

const CategoryNavigator = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(0);
  const [data, setData] = useState([]);
  let healthStack = 0;
  let tourStack = 0;
  let etcStack = 0;
  const categoryObj = {
    health: healthStack,
    tour: tourStack,
    etc: etcStack,
  };

  const handleNavClick = (active) => {
    setActiveNav(active);
  };

  const handleCardClick = (id) => {
    navigate(`/shop/${id}`);
  };

  const { isLoading: loadingList } = useQuery(
    [queryKeys.SHOP_LIST],
    () => getShopList(),
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
            <NavbarLink exact to="/shop">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 0
                      ? `/assets/todayTextClicked.svg`
                      : `/assets/todayTextUnClicked.svg`
                  }
                  alt="Today Text"
                />
                {activeNav === 0 && (
                  <Bar src={`/assets/underbar3.svg`} alt="Line Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(1)}>
            <NavbarLink exact to="/shop">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 1
                      ? `/assets/healthTextClicked.svg`
                      : `/assets/healthTextUnClicked.svg`
                  }
                  alt="Health Text"
                />
                {activeNav === 1 && (
                  <Bar src={`/assets/underbar5.svg`} alt="Health Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(2)}>
            <NavbarLink exact to="/shop">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 2
                      ? `/assets/tourTextClicked.svg`
                      : `/assets/tourTextUnClicked.svg`
                  }
                  alt="Tour Text"
                />
                {activeNav === 2 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Tour Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem onClick={() => handleNavClick(3)}>
            <NavbarLink exact to="/shop">
              <NavIconContainer>
                <Text
                  src={
                    activeNav === 3
                      ? `/assets/etcTextClicked.svg`
                      : `/assets/etcTextUnClicked.svg`
                  }
                  alt="Etc Text"
                />
                {activeNav === 3 && (
                  <Bar src={`/assets/underbar2.svg`} alt="Etc Underbar" />
                )}
              </NavIconContainer>
            </NavbarLink>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
      <ShopAd src="/assets/shopAd.svg" />
      <SaleContainer>
        {activeNav === 0 && <SaleText>오늘의 특가 상품</SaleText>}
        {activeNav === 1 && <SaleText>건강/뷰티 특가 상품</SaleText>}
        {activeNav === 2 && <SaleText>여행 특가 상품</SaleText>}
        {activeNav === 3 && <SaleText>기타 특가 상품</SaleText>}
      </SaleContainer>
      <Box sx={{ marginLeft: "11px", display: "flex", overflowX: "scroll" }}>
        {data.map((item, index) => {
          let category = "";
          console.log("item: ", item);
          if (activeNav === 0) category = "today";
          if (activeNav === 1) category = "health";
          if (activeNav === 2) category = "tour";
          if (activeNav === 3) category = "etc";
          if (categoryObj[category] < 6 && item.category === category) {
            categoryObj[category]++;
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg src={item.img} alt={"Card Img"} />
                <CardName>
                  {item.name.length > 11
                    ? `${item.name.slice(0, 11)}...`
                    : item.name}
                </CardName>
                <CardSeller>{item.seller}</CardSeller>
                <CardPrice>{item.price.toLocaleString()}원</CardPrice>
                <CardDiscountContainer>
                  <CardDiscount>{item.discount}%</CardDiscount>
                  <CardDiscountText>
                    {(
                      (item.price * (100 - item.discount)) /
                      100
                    ).toLocaleString()}
                    원
                  </CardDiscountText>
                </CardDiscountContainer>
              </CardContainer>
            );
          }
          if (activeNav === 0 && index < 7) {
            return (
              <CardContainer onClick={() => handleCardClick(item.id)}>
                <CardImg src={item.img} alt={"Card Img"} />
                <CardName>
                  {item.name.length > 11
                    ? `${item.name.slice(0, 11)}...`
                    : item.name}
                </CardName>
                <CardSeller>{item.seller}</CardSeller>
                <CardPrice>{item.price.toLocaleString()}원</CardPrice>
                <CardDiscountContainer>
                  <CardDiscount>{item.discount}%</CardDiscount>
                  <CardDiscountText>
                    {(
                      (item.price * (100 - item.discount)) /
                      100
                    ).toLocaleString()}
                    원
                  </CardDiscountText>
                </CardDiscountContainer>
              </CardContainer>
            );
          }
          return null;
        })}
      </Box>
      <BlankDiv style={{ marginTop: "0px" }} />
      <Footer />
    </>
  );
};

export default CategoryNavigator;
