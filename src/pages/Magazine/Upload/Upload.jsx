import React, { useState } from "react";
import styled from "@emotion/styled";
import Select, { components } from "react-select";

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
  background-color: #fcfcfc;
  height: 100vh;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
    margin-top: -5px;
  }
  .css-1dimb5e-singleValue {
    color: var(--unnamed, #0a81ce) !important;
    font-family: NanumSquare_ac;
    font-size: 13px;
    font-weight: 400;
    line-height: 150%;
    margin-top: -5px;
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
    height: 26px;
    min-height: 0px !important;
    margin-top: -3px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;
`;

const MainImgUpload = styled.input`
  margin-top: 20px;
  display: none;
`;

const SeparateLine = styled.img`
  margin-left: 24px;
  margin-top: 17px;
`;

const ContentText = styled.p`
  margin-top: 19px;
  margin-left: 24px;
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
  margin-left: 23px;
  width: 313px;
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

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          style={{ marginTop: "-6px" }}
          src="/assets/selectArrow.svg"
          alt="Select Arrow"
        />
      </components.DropdownIndicator>
    );
  };

  const handelGoBack = () => {
    window.history.back();
  };

  const handleImgChange = (e) => {
    setFile(URL?.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <TopContainer>
        <GoBackButton
          src={"/assets/goBackButton.svg"}
          alt="Go Back Button"
          onClick={handelGoBack}
        />
        <Title>칼럼 업로드</Title>
        <UploadButton src={"/assets/uploadButton.svg"} alt="Upload Button" />
      </TopContainer>
      <MainContainer>
        <TitleContainer>
          <CategoryContainer>
            <TitleInput placeholder="제목을 입력하세요." />
            <TitleSelect
              placeholder="카테고리 선택"
              components={{ DropdownIndicator }}
              options={[
                { value: "0", label: "라이프스타일" },
                { value: "1", label: "이슈" },
                { value: "2", label: "건강/뷰티" },
                { value: "3", label: "인물" },
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
              onChange={handleImgChange}
            />
          </ImageContainer>
        </TitleContainer>
        <SeparateLine src={"/assets/separateLine.svg"} />
        <ContentText>본문</ContentText>
        <ContentInput placeholder="네이버 글 URL을 입력해주세요" />
        {/* <GoodsText>상품 등록</GoodsText>
        <GoodsInput placeholder="태그할 상품" /> */}
      </MainContainer>
    </>
  );
};

export default Upload;
