import * as React from "react";
import Box from "@mui/joy/Box";
import { Item } from "./SummaryLayout.style";
import { Typography } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PropTypes from "prop-types";
export default function SummarySubHeader(props) {
  const [view, setView] = React.useState("list");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Item sx={{  padding: "10px 16px" }} elevation={6}>
      <Box
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
            {" "}
            50 Search results for "Test"
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
            {" "}
            <ToggleButtonGroup
              orientation="horizontal"
              value={props.isGrid === true ? "grid" : "list"}
              exclusive
              onChange={props.toggleGrid}
            >
              <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="grid" aria-label="grid">
                <ViewModuleIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Sort By:
            </Typography>
          </Box>
          <Select
            placeholder="Select a sort"
            defaultValue="default"
            sx={{ width: 240 }}
          >
            <Option value="default">Default</Option>
            <Option value="yearAsc">Year Ascending</Option>
            <Option value="yearDsc">Year Descending</Option>
            <Option value="titleAsc">Title Ascending</Option>
            <Option value="titleDsc">Title Ascending</Option>
          </Select>
        </Box>
      </Box>
    </Item>
  );
}

SummarySubHeader.PropTypes = {
  toggleGrid: PropTypes.func,
  isGrid: PropTypes.bool,
};
