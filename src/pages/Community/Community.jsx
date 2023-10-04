import React, { useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import getUserInfo from "../../services/Common/Get/getUserInfo";
import CategoryNavigator from "../../components/Community/CategoryNavigator";
import styled from "@emotion/styled";
import { Fab } from "@mui/material";

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

function Community() {
  const phone = localStorage.getItem("phone");
  const [userInfo, setUserInfo] = useState([]);

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

  const handelUploadButtonClick = () => {
    window.location.href = "/community/upload";
  };

  if (loadingList && !userInfo) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <CategoryNavigator />
      {userInfo && (
        <UploadImgFab variant="extended" onClick={handelUploadButtonClick}>
          <UploadImg
            src={`${process.env.PUBLIC_URL}/assets/uploadFloatingButton.svg`}
            alt="Upload Button"
          />
        </UploadImgFab>
      )}
    </>
  );
}

export default Community;
