import React from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/keys";
import getMagazineDetail from "../../../ services/Magazine/Get/getMagazineDetail";

const Detail = () => {
  const magazineId = window.location.href.split("/")[4];
  const { data, isLoading } = useQuery(
    [queryKeys.MAGAZINE_DETAIL],
    () => getMagazineDetail(magazineId),
    {
      staleTime: 0,
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
};

export default Detail;
