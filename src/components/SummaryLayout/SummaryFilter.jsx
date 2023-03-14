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
import { deepSearch, printPage } from "../../utils/functions";
import {
  bookmarkAllRecord,
  getNumberOfRecords,
  getRecordsPerPageURL,
  viewBookmark,
} from "../../utils/record";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSnackbar } from "notistack";
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
  const { enqueueSnackbar } = useSnackbar();

  let bookmarkCount = deepSearch(xml, "bookmark_count");
  let numberOfRecords = getNumberOfRecords(xml);
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
        <MenuItem
          onClick={(_) => {
            enqueueSnackbar(`Adding all records to the bookmark ...`, {
              variant: "info",
            });
            bookmarkAllRecord(xml).then((_) => {
              enqueueSnackbar(
                `All records have been successfully added to the bookmark!`
              );
            });
          }}
        >
          <ListItemText> Bookmark all records</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={(_) => {
            printPage();
          }}
        >
          <ListItemText> Print this page</ListItemText>
        </MenuItem>
        <MenuItem onClick={(_) => viewBookmark(xml)}>
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
        defaultValue={numberOfRecords}
        className="filterSelect"
        onChange={(e, v) => {
          if (!v) {
            return null;
          }
          window.location = getRecordsPerPageURL(xml, v);
        }}
      >
        <Option value={25}>25 Records</Option>
        <Option value={50}>50 Records</Option>
        <Option value={100}>100 Records</Option>
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
