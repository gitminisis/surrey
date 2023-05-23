import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import {
  getCurrentPageFromPagination,
  getPageUrlFromPagination,
  getPagination,
  getPaginationLength,
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
            count={getPaginationLength(pagination.a)}
            shape="rounded"
            defaultPage={getCurrentPageFromPagination(pagination.a)}
            onChange={(e, i) => {
              setClicked(true);
              window.location = getPageUrlFromPagination(pagination.a, i - 1);
            }}
            renderItem={(item) => {
              if (item.type === "page") {
                let index = item.page;
                let pageItem = pagination.a[index - 1];
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
                return <PaginationItem {...item} page={pageNumb} />
              }


              return <PaginationItem {...item} />;
            }}
          />
        </Stack>
      )}
    </div>
  );
};

export default SummaryPagination;
