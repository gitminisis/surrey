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
  console.log(pagination)
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
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </Stack>
      )}
    </div>
  );
};

export default SummaryPagination;
