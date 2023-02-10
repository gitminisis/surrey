import * as React from "react";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { Item } from "./SummaryLayout.style";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Typography } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function TabsVariants() {
  const [view, setView] = React.useState("list");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Item sx={{ hight: "80px", padding: "10px 16px" }} elevation={6}>
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
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="module" aria-label="module">
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
