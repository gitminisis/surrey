import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./SummaryLayout.style";
import {
  Divider,
  Typography,
  FormGroup,
  FormControlLabel,
  ListItemButton,
  ListItemText,
  MenuList,
  MenuItem,
  ListItemIcon,
  Badge,
  Collapse,
} from "@mui/material";
import Box from "@mui/joy/Box";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { deepSearch } from "../../utils/functions";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Card from "@mui/joy/Card";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const FieldFilter = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const { data } = props;
  return (
    <List
      variant="outlined"
      sx={{
        maxHeight: "400px",
        overflowY: "scroll",
        overflowX: "hidden",
        margin: "4px 4px",
        border: "none",
      }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open}>
        <List>
          {data.item_group.map((item) => (
            <ListItem sx={{ marginTop: "16px" }}>
              <Checkbox
                label={item.item_value}
                overlay
                sx={{ color: "inherit" }}
                onChange={(_) => (window.location = item.item_link)}
              />
              <Typography textColor="inherit" sx={{ ml: "auto" }}>
                {item.item_frequency}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};
const SummaryFilter = (props) => {
  const { data, xml } = props;
  let bookmarkCount = deepSearch(xml, "bookmark_count");
  return (
    <Item
      elevation={0}
      sx={{
        height: "auto",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <TextBox>Bookmark</TextBox>
      <MenuList sx={{ textAlign: "left" }}>
        <MenuItem>
          <ListItemText> Bookmark all records</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText> Clear all records</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText> View bookmarks</ListItemText>
          <Typography variant="body2" color="text.secondary">
            <Badge badgeContent={bookmarkCount} color="primary"></Badge>
          </Typography>
        </MenuItem>
      </MenuList>
      <TextBox>Sort by</TextBox>
      <Select
        placeholder="Select a sort"
        defaultValue="default"
        className="filterSelect"
      >
        <Option value="default">Default</Option>
        <Option value="yearAsc">Year Ascending</Option>
        <Option value="yearDsc">Year Descending</Option>
        <Option value="titleAsc">Title Ascending</Option>
        <Option value="titleDsc">Title Ascending</Option>
      </Select>
      <TextBox>Records per page</TextBox>
      <Select
        placeholder="Records per page"
        defaultValue="25"
        className="filterSelect"
      >
        <Option value="25">25 Records</Option>
        <Option value="50">50 Records</Option>
        <Option value="100">100 Records</Option>
      </Select>
      <TextBox>Filter by</TextBox>
      {data.map((item, i) => (
        <FieldFilter data={item} />
      ))}
    </Item>
  );
};

export const TextBox = ({ children }) => {
  return (
    <Divider sx={{ margin: "20px 0px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {children}
        </Typography>
      </Box>
    </Divider>
  );
};
SummaryFilter.propTypes = {};

export default SummaryFilter;
