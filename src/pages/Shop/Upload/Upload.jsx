import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Select, { components } from "react-select";
import usePostCommunityMutation from "../../../hooks/Community/usePostCommunityMutation";
import { TextField } from "@mui/material";
import usePostShopMutation from "../../../hooks/Shop/usePostShopMutation";

const TopContainer = styled.div`
  height: 73px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const GoBackButton = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -36px;
`;

const Title = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
`;

const SubTitle = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 700;
`;

const UploadButton = styled.img`
  width: 26px;
  margin-right: -36px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  height: 100vh;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  margin-top: 20px;
  background-color: #fcfcfc;
  color: #575757;
  font-size: 18px;
  font-weight: 700;
  border: none;
`;

const TitleSelect = styled(Select)`
  margin-top: 8px;
  width: 131px;
  height: 26px;
  .css-13cymwt-control {
    height: 26px;
    min-height: 0px !important;
    border-radius: 3px;
    border: 1px solid var(--unnamed, #73b6ff);
    padding: 0px 0px 0px 0px !important;
  }
  .css-t3ipsp-control {
    height: 26px;
    min-height: 0px !important;
    border-radius: 3px;
    border: 1px solid var(--unnamed, #73b6ff);
    padding: 0px 0px 0px 0px !important;
  }
  .css-1jqq78o-placeholder {
    color: var(--unnamed, #0a81ce);
    font-family: NanumSquare_ac;
    font-size: 13px;
    font-weight: 400;
    line-height: 150%;
  }
  .css-1dimb5e-singleValue {
    color: var(--unnamed, #0a81ce) !important;
    font-family: NanumSquare_ac;
    font-size: 13px;
    font-weight: 400;
    line-height: 150%;
  }
  .css-1u9des2-indicatorSeparator {
    display: none;
  }
  .css-1nmdiq5-menu {
    color: var(--unnamed, #0a81ce) !important;
    font-family: NanumSquare_ac;
    font-size: 13px;
    font-weight: 400;
  }
  .css-qbdosj-Input {
    display: none;
    height: 26px;
    min-height: 0px !important;
  }
`;

const ImageContainer = styled.div`
  margin-left: 39px;
  margin-top: 20px;
`;

const DetailImageContainer = styled.div``;

const MainImgUpload = styled.input`
  margin-top: 20px;
  display: none;
`;

const SeparateLine = styled.img`
  margin-top: 17px;
  width: 85%;
`;

const ContentInput = styled(TextField)`
  margin-left: 0px;
  width: 293px;
`;

const Upload = () => {
  const [imgMain, setImgMain] = useState(null);
  const [imgDetail, setImgDetail] = useState(null);
  const postShopMutation = usePostShopMutation();

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          style={{ marginTop: "-2px" }}
          src={`${process.env.PUBLIC_URL}/assets/selectArrow.svg`}
          alt="Select Arrow"
        />
      </components.DropdownIndicator>
    );
  };

  const handelGoBack = () => {
    window.location.href = "/community";
  };

  const handleImgMainChange = (e) => {
    setImgMain(URL?.createObjectURL(e.target.files[0]));
  };

  const handelImgDetailChange = (e) => {
    setImgDetail(URL?.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async (e) => {
    if (e.target.name.value === "") {
      e.preventDefault();
      alert("상품명을 입력해주세요.");
      return;
    }
    if (e.target.category.value === "") {
      e.preventDefault();
      alert("카테고리를 선택해주세요.");
      return;
    }
    if (document.getElementById("fileInputMain")?.files[0] === undefined) {
      e.preventDefault();
      alert("메인 이미지를 업로드해주세요.");
      return;
    }
    if (e.target.seller.value === "") {
      e.preventDefault();
      alert("판매자명을 입력해주세요.");
      return;
    }
    if (e.target.naver.value === "") {
      e.preventDefault();
      alert("네이버 스마트스토어 링크를 입력해주세요.");
      return;
    }
    if (e.target.coupang.value === "") {
      e.preventDefault();
      alert("쿠팡 링크를 입력해주세요.");
      return;
    }
    if (e.target.price.value === "") {
      e.preventDefault();
      alert("가격을 입력해주세요.");
      return;
    }
    if (e.target.discount.value === "") {
      e.preventDefault();

      alert("할인율을 입력해주세요.");
      return;
    }
    if (e.target.description.value === "") {
      e.preventDefault();
      alert("상품 설명을 입력해주세요.");
      return;
    }
    if (document.getElementById("fileInputDetail")?.files[0] === undefined) {
      e.preventDefault();
      alert("상세 이미지를 업로드해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("category", e.target.category.value);
    formData.append("seller", e.target.seller.value);
    formData.append("naver", e.target.naver.value);
    formData.append("coupang", e.target.coupang.value);
    formData.append("price", e.target.price.value);
    formData.append("discount", e.target.discount.value);
    formData.append("description", e.target.description.value);
    formData.append(
      "imgMain",
      document.querySelector("input[name=img-main]")?.files[0]
    );
    formData.append(
      "imgDetail",
      document.querySelector("input[name=img-detail]")?.files[0]
    );
    e.preventDefault();
    try {
      console.log("imgMain: ", formData.get("imgMain"));
      console.log("imgDetail: ", formData.get("imgDetail"));
      await postShopMutation.mutateAsync(formData);
      alert("업로드 되었습니다.");
      window.location.href = "/shop";
    } catch (error) {
      console.error("업로드 실패:", error);
      // 실패 처리 로직 추가
    }
  };
  return (
    <form onSubmit={handleUpload}>
      <TopContainer>
        <GoBackButton
          src={`${process.env.PUBLIC_URL}/assets/goBackButton.svg`}
          alt="Go Back Button"
          onClick={handelGoBack}
        />
        <Title>상품 업로드</Title>
        <label for="submit">
          <UploadButton
            src={`${process.env.PUBLIC_URL}/assets/uploadButton.svg`}
            alt="Upload Button"
          />
          <input type="submit" id="submit" style={{ display: "none" }} />
        </label>
      </TopContainer>
      <MainContainer>
        <TitleContainer>
          <CategoryContainer>
            <TitleInput name="name" placeholder="상품명" />
            <TitleSelect
              name="category"
              placeholder="카테고리 선택"
              components={{ DropdownIndicator }}
              options={[
                { value: "health", label: "건강/뷰티" },
                { value: "tour", label: "여행" },
                { value: "etc", label: "기타" },
              ]}
            />
          </CategoryContainer>
          <ImageContainer>
            <label for="fileInputMain" class="image-button">
              {imgMain === null ? (
                <img
                  style={{ width: "54px", height: "54px" }}
                  src={`${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`}
                  alt="Upload Img"
                />
              ) : (
                <img
                  style={{ width: "54px", height: "54px" }}
                  src={imgMain}
                  alt="Upload Img"
                />
              )}
            </label>
            <MainImgUpload
              id="fileInputMain"
              type="file"
              name="img-main"
              onChange={handleImgMainChange}
            />
          </ImageContainer>
        </TitleContainer>
        <SeparateLine
          src={`${process.env.PUBLIC_URL}/assets/separateLine.svg`}
        />
        <SubTitle>판매자</SubTitle>
        <ContentInput name="seller" placeholder="판매자명" />
        <SubTitle>네이버 스마트스토어 링크</SubTitle>
        <ContentInput name="naver" placeholder="url을 입력해주세요." />
        <SubTitle>쿠팡 링크</SubTitle>
        <ContentInput name="coupang" placeholder="url을 입력해주세요." />
        <SubTitle>가격</SubTitle>
        <ContentInput type="price" name="price" placeholder="가격" />
        <SubTitle>할인율(%)</SubTitle>
        <ContentInput type="discount" name="discount" placeholder="할인율" />
        <SubTitle>상품 설명</SubTitle>
        <ContentInput
          multiline
          rows={5}
          name="description"
          placeholder="내용을 입력해주세요"
        />
        <SubTitle>상세 이미지</SubTitle>
        <DetailImageContainer>
          <label for="fileInputDetail" class="image-button">
            {imgDetail === null ? (
              <img
                style={{ width: "54px", height: "54px" }}
                src={`${process.env.PUBLIC_URL}/assets/imgUploadButton.svg`}
                alt="Upload Img"
              />
            ) : (
              <img
                style={{ width: "293px", height: "100%" }}
                src={imgDetail}
                alt="Upload Img"
              />
            )}
          </label>
          <MainImgUpload
            id="fileInputDetail"
            type="file"
            name="img-detail"
            onChange={handelImgDetailChange}
          />
        </DetailImageContainer>
      </MainContainer>
    </form>
  );
};

export default Upload;
