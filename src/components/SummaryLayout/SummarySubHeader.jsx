import * as React from "react";
import Box from "@mui/joy/Box";
import { Item } from "./SummaryLayout.style";
import { Typography, Tooltip } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import TuneIcon from "@mui/icons-material/Tune";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PropTypes from "prop-types";
import { deepSearch, getXMLRecord } from "../../utils/functions";
export default function SummarySubHeader(props) {
  let { xml, statementField, isFilter = true, statement = null } = props;

  let totalRecord = deepSearch(xml, "total_record");
  let searchStatement = deepSearch(
    xml,
    statementField ? statementField : "search_statement"
  );
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
            {statement
              ? statement
              : `${totalRecord} search results for "${searchStatement}"`}
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
              onChange={props.toggleGrid}
            >
              <ToggleButton value="grid" aria-label="grid">
                <Tooltip title="Grid view">
                  <ViewModuleIcon />
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="list" aria-label="list">
                <Tooltip title="List view">
                  <ViewListIcon />
                </Tooltip>
              </ToggleButton>
              {isFilter && (
                <ToggleButton
                  value="filter toggle"
                  onClick={(_) => {
                    props.toggleFilter();
                    props.toggleMobileFilter();
                  }}
                  aria-label="filter toggle"
                >
                  <Tooltip title="Toggle filter">
                    <TuneIcon />
                  </Tooltip>
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Box>
    </Item>
  );
}

SummarySubHeader.propTypes = {
  toggleGrid: PropTypes.func,
  isGrid: PropTypes.bool,
  toggleFilter: PropTypes.func,
  toggleMobileFilter: PropTypes.func,
};
