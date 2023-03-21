import * as React from "react";
import Box from "@mui/joy/Box";
import { Item } from "./SummaryBookmarkLayout.style";
import { Typography, Tooltip } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ViewListIcon from "@mui/icons-material/ViewList";

import TuneIcon from "@mui/icons-material/Tune";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PropTypes from "prop-types";
import { deepSearch, getXMLRecord } from "../../utils/functions";
export default function SummaryBookmarkSubHeader(props) {
  let { xml } = props;
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
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ToggleButtonGroup
              orientation="horizontal"
              value={props.isGrid === true ? "grid" : "list"}
              exclusive
            >
              <ToggleButton
                value="filter toggle"
                onClick={(_) => {
                  props.toggleSidebar();
                  //   props.toggleMobileFilter();
                }}
                aria-label="filter sidebar"
              >
                <Tooltip title="Toggle sidebar">
                  <TuneIcon />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
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
