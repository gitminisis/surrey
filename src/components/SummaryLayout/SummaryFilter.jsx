import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./SummaryLayout.style";
import {
  Divider,
  Typography,
  ListItemText,
  MenuList,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
} from "@mui/material";
import { Box, Select, Option, Checkbox, List, ListItem } from "@mui/joy";

import { deepSearch, printPage,sanitizeFilterURL } from "../../utils/functions";
import {
  FILTER_TITLE_BY_FIELD,
  bookmarkAllRecord,
  getNumberOfRecords,
  getRecordsPerPageURL,
  viewBookmark,
} from "../../utils/record";

import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSnackbar } from "notistack";
import { getSortReportURL } from "../../utils/record";

const FieldFilter = (props) => {
  const { data, index, application, handleFilter, selectedValues } = props;
  console.log(application)
  const [open, setOpen] = React.useState(index === 0);

  const handleClick = () => {
    setOpen(!open);
  };
  const { item_group } = data;
  const itemGroups = Array.isArray(item_group) ? item_group : [item_group];
  return (
    <Accordion defaultExpanded={index === 0} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={data._name}
        id={data._name}
      >
        <Typography>{FILTER_TITLE_BY_FIELD[data._name]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {itemGroups.map((item, i) => {
            if (item.item_value === "ONLINE_EXHIBITION_VIEW") {
              return null;
            }
            if (item.item_value === "COLLECTIONS") {
              item.item_value = "Artifact";
            }
            if (item.item_value === "DESCRIPTION") {
              item.item_value = "Archives";
            }
            return (
              <ListItem key={`ListItemFilter-${i}`} sx={{}}>
                <Checkbox
                  checked={item.item_selected && item.item_selected.toString() === "Y"}
                  label={item.item_value}
                  overlay
                  sx={{ color: "inherit", textAlign: "left" }}
                  onChange={(e) => {
                    window.location =
                      sanitizeFilterURL(item.item_link.toString(), application)
                  }}
                />
                <Typography sx={{ ml: "auto" }}>
                  {item.item_frequency}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
const SummaryFilter = (props) => {
  const { data, xml, sortOptions, application } = props;
  const { enqueueSnackbar } = useSnackbar();
  const filter = deepSearch(xml, "filter")[0];

  let bookmarkCount = deepSearch(xml, "bookmark_count");
  let numberOfRecords = getNumberOfRecords(xml);

  const sortSelectHandler = (e, v) => {
    let url = getSortReportURL(xml, application, v);
    window.location = url;
  };

  return (
    <Item
      elevation={0}
      sx={{
        height: "auto",
        maxHeight: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        px: "10px",
        paddingTop: "16px",
        paddingBottom: "150px",
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
              location.reload();
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
      {sortOptions !== false ? (
        <>
          <TextBox>Sort by</TextBox>
          <Select
            placeholder="Select a sort"
            className="filterSelect"
            onChange={sortSelectHandler}
          >
            <Option value="default">Default</Option>
            <Option value="date_asc">Year Ascending</Option>
            <Option value="date_dsc">Year Descending</Option>
            <Option value="title_asc">Title Ascending</Option>
            <Option value="title_dsc">Title Descending</Option>
          </Select>
        </>
      ) : null}
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

      {filter !== undefined && filter.length > 0 && (
        <>
          <TextBox>Filter by</TextBox>

          {filter.map((item, i) => (
            <FieldFilter
              application={application}
              key={`FieldFilter-${i}`}
              data={item}
              index={i}
            />
          ))}
        </>
      )}
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
FieldFilter.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  handleFilter: PropTypes.func,
  selectedValues: PropTypes.array,
};
export default SummaryFilter;
