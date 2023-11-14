import * as React from "react";
import Box from "@mui/joy/Box";
import { Item } from "./SummaryBookmarkLayout.style";
import { Typography, Tooltip } from "@mui/material";
import Button from "@mui/joy/Button";
import PropTypes from "prop-types";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeAllBookmarkRecord } from "../../utils/record";
export default function SummaryBookmarkSubHeader(props) {
  let { xml , children} = props;
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  let totalRecord = deepSearch(xml, "total_record");
  return (
    <Item sx={{ padding: "10px 16px" }} elevation={6}>
      <Box
        className="summarySubHeaderBox"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            {`${totalRecord} bookmarked item(s)`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <Button
              sx={{ mx: 1 }}
              variant="soft"
              color="danger"
              onClick={(_) => {
                removeAllBookmarkRecord();
                location.reload();
              }}
            >
              <DeleteIcon /> Clear All Bookmarks
            </Button>
            {children}
          
          </Box>
        </Box>
      </Box>
    </Item>
  );
}

SummaryBookmarkSubHeader.propTypes = {
  toggleGrid: PropTypes.func,
  isGrid: PropTypes.bool,
};
