import React, { useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../react-query/keys";
import getUserInfo from "../../ services/Common/Get/getUserInfo";

const Magazine = () => {
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

  if (loadingList && !userInfo) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>Magazine Page</h2>
    </div>
  );
};

export default Magazine;
