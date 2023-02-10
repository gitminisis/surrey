import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const SummaryPagination = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      {" "}
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </div>
  );
};

export default SummaryPagination;
