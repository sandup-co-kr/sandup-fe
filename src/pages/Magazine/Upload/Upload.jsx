import React, { useState } from "react";
import styled from "@emotion/styled";
import Select, { components } from "react-select";
import usePostMagazineMutation from "../../../hooks/Magazine/usePostMagazineMutation";

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

const MainImgUpload = styled.input`
  margin-top: 20px;
  display: none;
`;

const SeparateLine = styled.img`
  margin-top: 17px;
  width: 85%;
`;

const ContentText = styled.p`
  margin-top: 19px;
  margin-left: -278px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const SubTitleText = styled.p`
  margin-top: 19px;
  margin-left: -263px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const ContentInput = styled.input`
  margin-top: -8px;
  margin-left: 0px;
  width: 293px;
  height: 41px;
  border-radius: 3px;
  border: 1px solid var(--unnamed, #a3a3a3);
  padding-left: 10px;
`;

const GoodsText = styled.p`
  margin-top: 19px;
  margin-left: 24px;
  color: var(--unnamed, #575757);
  leading-trim: both;
  text-edge: cap;
  font-family: NanumSquare_ac;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;

const GoodsInput = styled.input`
  margin-top: -8px;
  margin-left: 23px;
  width: 313px;
  height: 41px;
  border-radius: 3px;
  border: 1px solid var(--unnamed, #a3a3a3);
`;

const Upload = () => {
  const [file, setFile] = useState(null);
  const postMagazineMutation = usePostMagazineMutation();

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          style={{ marginTop: "-2px" }}
          src="/assets/selectArrow.svg"
          alt="Select Arrow"
        />
      </components.DropdownIndicator>
    );
  };

  const handelGoBack = () => {
    window.location.href = "/magazine";
  };

  const handleImgChange = (e) => {
    setFile(URL?.createObjectURL(e.target.files[0]));
  };

  const handleUpload = (e) => {
    console.log(e);
    if (e.target.title.value === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (e.target.subTitle.value === "") {
      alert("부제목을 입력해주세요.");
      return;
    }
    if (e.target.linkText.value === "") {
      alert("링크 텍스트를 입력해주세요.");
      return;
    }
    if (e.target.category.value === "") {
      alert("카테고리를 선택해주세요.");
      return;
    }
    if (e.target.content.value === "") {
      alert("본문 url을 입력해주세요.");
      return;
    }
    if (document.getElementById("fileInput").files[0] === undefined) {
      alert("이미지를 업로드해주세요.");
      return;
    }
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("category", e.target.category.value);
    formData.append("subTitle", e.target.subTitle.value);
    formData.append("linkText", e.target.linkText.value);
    formData.append("content", e.target.content.value);
    formData.append("img", document.getElementById("fileInput").files[0]);
    postMagazineMutation.mutate(formData);
    alert("업로드 되었습니다.");
  };

  return (
    <form onSubmit={handleUpload}>
      <TopContainer>
        <GoBackButton
          src={"/assets/goBackButton.svg"}
          alt="Go Back Button"
          onClick={handelGoBack}
        />
        <Title>칼럼 업로드</Title>
        <label for="submit">
          <UploadButton src={"/assets/uploadButton.svg"} alt="Upload Button" />
          <input type="submit" id="submit" style={{ display: "none" }} />
        </label>
      </TopContainer>
      <MainContainer>
        <TitleContainer>
          <CategoryContainer>
            <TitleInput name="title" placeholder="제목을 입력하세요." />
            <TitleSelect
              name="category"
              placeholder="카테고리 선택"
              components={{ DropdownIndicator }}
              options={[
                { value: "lifestyle", label: "라이프스타일" },
                { value: "issue", label: "이슈" },
                { value: "health", label: "건강/뷰티" },
                { value: "person", label: "인물" },
              ]}
            />
          </CategoryContainer>
          <ImageContainer>
            <label for="fileInput" class="image-button">
              {file === null ? (
                <img
                  style={{ width: "54px", height: "54px" }}
                  src="/assets/imgUploadButton.svg"
                  alt="Upload Img"
                />
              ) : (
                <img
                  style={{ width: "54px", height: "54px" }}
                  src={file}
                  alt="Upload Img"
                />
              )}
            </label>
            <MainImgUpload
              id="fileInput"
              type="file"
              name="img"
              onChange={handleImgChange}
            />
          </ImageContainer>
        </TitleContainer>
        <SeparateLine src={"/assets/separateLine.svg"} />
        <SubTitleText>부제목</SubTitleText>
        <ContentInput name="subTitle" placeholder="부제목을 입력해주세요" />
        <ContentText>링크</ContentText>
        <ContentInput name="linkText" placeholder="링크텍스트를 입력해주세요" />
        <ContentText>본문</ContentText>
        <ContentInput
          name="content"
          placeholder="네이버 글 URL을 입력해주세요"
        />
        {/* <GoodsText>상품 등록</GoodsText>
        <GoodsInput placeholder="태그할 상품" /> */}
      </MainContainer>
    </form>
  );
};

export default Upload;
