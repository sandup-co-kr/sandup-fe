import React, { useRef, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/keys";
import getMagazineDetail from "../../../services/Magazine/Get/getMagazineDetail";
import styled from "@emotion/styled";

const Content = styled.div`
  width: 100%;
`;

const Detail = () => {
  const magazineId = window.location.href.split("/")[4];
  const { data, isLoading } = useQuery(
    [queryKeys.MAGAZINE_DETAIL],
    () => getMagazineDetail(magazineId),
    {
      staleTime: 0,
    }
  );

  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Content
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
      <style>{`
        .content img {
          width: ${contentWidth}px;
        }
      `}</style>
    </>
  );
};

export default Detail;
