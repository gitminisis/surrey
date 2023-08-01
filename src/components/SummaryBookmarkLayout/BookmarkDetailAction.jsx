import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import LinkIcon from "@mui/icons-material/Link";
import {
  bookmarkRecord,
  copyToClipboard,
  nextRecordURL,
  backToSummary,
  previousRecordURL,
  viewBookmark,
} from "../../utils/record";
import { useSnackbar } from "notistack";
import { printPage, deepSearch } from "../../utils/functions";
import PrintIcon from "@mui/icons-material/Print";
import { Tooltip } from "@mui/material";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import PreviewIcon from "@mui/icons-material/Preview";
const BookmarkDetailAction = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { xml, size, removeBookmark } = props;
  let sisn = deepSearch(xml, "sisn")[0];
  let database = deepSearch(xml, "database_name")[0];
  let bookmarkCount = deepSearch(xml, "bookmark_count");
  let recordLink = deepSearch(xml, "record_link")[0];
  let next = nextRecordURL(xml);
  let previous = previousRecordURL(xml);
  let toSummary = backToSummary(xml);

  return (
    <div className="recordAction">
      <Tooltip title="Remove from bookmark">
        <IconButton
          aria-label="remove from bookmark"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            if (removeBookmark) {
              removeBookmark(xml);
            }
          }}
        >
          <BookmarkRemoveIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Copy this record URL">
        <IconButton
          aria-label="copy link"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            copyToClipboard(sisn, database);
            enqueueSnackbar(`Copied to clipboard`);
          }}
        >
          <LinkIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="View record detail">
        <IconButton
          aria-label="view record detail"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            window.open(recordLink);
          }}
        >
          <PreviewIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Print this page">
        <IconButton
          aria-label="print page"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            printPage();
          }}
        >
          <PrintIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

BookmarkDetailAction.propTypes = {};

export default BookmarkDetailAction;
