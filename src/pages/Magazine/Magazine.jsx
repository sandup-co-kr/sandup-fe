import React, { useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import getUserInfo from "../../services/Common/Get/getUserInfo";
import { Fab } from "@mui/material";
import styled from "@emotion/styled";
import CategoryNavigator from "../../components/Magazine/CategoryNavigator";

const UploadImgFab = styled(Fab)`
  width: 119px;
  height: 53px;
  background-color: #e4f1ff;
  position: fixed;
  bottom: 86px;
  right: 6px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;
`;

const UploadImg = styled.img`
  width: fit-content;
  height: fit-content;
`;

const Magazine = () => {
  const phone = localStorage.getItem("phone");
  const [userInfo, setUserInfo] = useState({});

  const handelUploadButtonClick = () => {
    window.location.href = "/magazine/upload";
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
      <CategoryNavigator />
      {userInfo?.admin ? (
        <UploadImgFab variant="extended" onClick={handelUploadButtonClick}>
          <UploadImg
            src={`${process.env.PUBLIC_URL}/assets/uploadFloatingButton.svg`}
            alt="Upload Button"
          />
        </UploadImgFab>
      ) : (
        <></>
      )}
    </>
  );
};

export default Magazine;
