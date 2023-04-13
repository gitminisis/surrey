import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import {
  getCurrentPageFromPagination,
  getPageUrlFromPagination,
  getPagination,
} from "../../utils/record";
const SummaryPagination = (props) => {
  const { xml } = props;
  const [pagination, setPagination] = useState(getPagination(xml));
  const [clicked, setClicked] = useState(false);
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      {pagination && (
        <Stack spacing={2}>
          <Pagination
            count={pagination.a.length}
            shape="rounded"
            defaultPage={getCurrentPageFromPagination(pagination.a)}
            onChange={(e, i) => {
              setClicked(true);
              window.location = getPageUrlFromPagination(pagination.a, i - 1);
            }}
            disabled={clicked}
            renderItem={(item) => {
              let index = item.page;
              console.log(index)
              // if (!index) {
              //   return null;
              // }
              let pageItem = pagination.a[index];
        console.log(pageItem)
              if (!pageItem) {
                return null;
              }
              let pageNumb = pageItem["__text"];
              if (pageNumb && pageNumb === "Next") {
                return null;
              }
              if (pageItem.b) {
                pageNumb = pageItem.b;
              }
              console.log(pageNumb, pageItem)

              return <PaginationItem {...item} page={Number.parseInt(pageNumb)-1} />;
            }}
          />
        </Stack>
      )}
    </div>
  );
};

export default SummaryPagination;
