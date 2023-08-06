import React, { useState } from "react";
import { queryKeys } from "../../react-query/keys";
import { useQuery } from "react-query";
import getColumnMainList from "../../ services/Main/Get/getColumnMainList";
import styled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router";
import CategoryNavigator from "../../components/Common/CategoryNavigator";

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

const Main = () => {
  const navigate = useNavigate();
  const [userMainList, setUserMainList] = useState([]);

  const handleCarouselLinkClick = (id) => {
    navigate(`/column/${id}`);
  };

  const { isLoading: loadingList } = useQuery(
    [queryKeys.COLUMN_MAIN],
    () => getColumnMainList(),
    {
      onSuccess: (resultData) => {
        setUserMainList(resultData);
      },
      staleTime: 0,
    }
  );

  if (loadingList && !userMainList[0]) {
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
    </>
  );
};

export default Main;
