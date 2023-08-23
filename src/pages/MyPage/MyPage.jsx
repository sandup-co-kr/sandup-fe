import React, { useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import getUserInfo from "../../services/Common/Get/getUserInfo";
import styled from "@emotion/styled";
import Footer from "../../components/Common/Footer";

const ProfileContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 213px;
  background: #f6faff;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  margin-top: 58px;
  margin-left: 27px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 37.5px */
`;

const ProfileImg = styled.img`
  margin-top: 37px;
  margin-right: 18px;
  height: 83px;
  width: 83px;
  border-radius: 50%;
`;

const EditButton = styled.img`
  position: absolute;
  width: 31px;
  height: 31px;
  margin-top: 89px;
  right: 21px;
`;

const ProfileImgUpload = styled.input`
  display: none;
`;

const PointBox = styled.div`
  margin-left: 5%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-top: 154px;
  width: 70%;
  height: 95px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #fff;
  box-shadow: 2px 4px 13px 0px rgba(211, 211, 211, 0.25);
  padding: 0 10%;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PointTextContainer = styled.div`
  display: flex;
`;

const PointIcon = styled.img`
  margin-top: 24px;
  height: 21px;
  width: 21px;
`;

const PointInt = styled.p`
  margin-left: 5px;
  color: var(--unnamed, #1c6ea3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

const PointText = styled.p`
  margin-top: -10px;
  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;

const CategoryText1 = styled.p`
  margin-top: 300px;
  margin-left: 5%;
  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const CategoryText2 = styled.p`
  margin-top: 20px;
  margin-left: 5%;
  color: var(--unnamed, #a3a3a3);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const CategoryContainer = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 20px;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.p`
  margin-top: 0px;
  color: var(--unnamed, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const CategoryIcon = styled.img`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
`;

const BlankDiv = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 8px;
  margin-top: 20px;
`;

function MyPage() {
  const phone = localStorage.getItem("phone");
  const [userInfo, setUserInfo] = useState([]);
  const [file, setFile] = useState(null);

  const changeProfileHandler = (e) => {
    setFile(URL?.createObjectURL(e.target.files[0]));
  };

  const { isLoading: loadingList } = useQuery(
    [queryKeys.USER_INFO, phone],
    () => getUserInfo(phone),
    {
      onSuccess: (resultData) => {
        console.log("resultData: ", resultData);
        setUserInfo(resultData);
      },
      staleTime: 0,
    },
    [phone]
  );

  if (loadingList && !userInfo) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <ProfileContainer>
        <Name>{userInfo.name?.split("").join(" ")}</Name>
        <label for="fileInput" class="image-button">
          <ProfileImg src={userInfo.img || file || "/assets/editProfile.svg"} />
          <EditButton src="/assets/editButton.svg" />
          <ProfileImgUpload
            id="fileInput"
            type="file"
            name="img"
            onChange={changeProfileHandler}
          />
        </label>
      </ProfileContainer>
      <PointBox>
        <PointContainer>
          <PointTextContainer>
            <PointIcon src="/assets/point.svg" />
            <PointInt>{userInfo.point}P</PointInt>
          </PointTextContainer>
          <PointText>포인트</PointText>
        </PointContainer>
        <PointContainer>
          <PointTextContainer>
            <PointIcon src="/assets/bookMark.svg" />
            <PointInt>{userInfo.bookmark}</PointInt>
          </PointTextContainer>
          <PointText>저장한 글</PointText>
        </PointContainer>
        <PointContainer>
          <PointTextContainer>
            <PointIcon src="/assets/order.svg" />
            <PointInt>{userInfo.ordered}</PointInt>
          </PointTextContainer>
          <PointText>주문내역</PointText>
        </PointContainer>
      </PointBox>
      <CategoryText1>내 활동</CategoryText1>
      <CategoryContainer>
        <Category>작성한 글</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <CategoryContainer>
        <Category>댓글, 좋아요 관리</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <CategoryContainer>
        <Category>저장한 글</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <CategoryContainer>
        <Category>포인트 적립 내역</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <BlankDiv />
      <CategoryText2>쇼핑몰</CategoryText2>
      <CategoryContainer>
        <Category>주문내역</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <CategoryContainer>
        <Category>반품 및 교환</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <CategoryContainer>
        <Category>문의</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <CategoryContainer>
        <Category>리뷰관리</Category>
        <CategoryIcon src="/assets/mypageArrow.svg" />
      </CategoryContainer>
      <Footer />
    </>
  );
}

export default MyPage;
