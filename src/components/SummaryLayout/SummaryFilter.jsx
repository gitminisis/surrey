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
  ListItemIcon,
  Collapse,
} from "@mui/material";
import Box from "@mui/joy/Box";
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
        margin: "18px 16px",
        borderRadius: "sm",
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
  const { data,  } = props;
  return (
    <Item
      elevation={6}
      sx={{
        height: "auto",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "0",
     
      }}
    >
      {data.map((item, i) => (
        <FieldFilter data={item} />
      ))}
    </Item>
  );
};

SummaryFilter.propTypes = {};

export default SummaryFilter;
