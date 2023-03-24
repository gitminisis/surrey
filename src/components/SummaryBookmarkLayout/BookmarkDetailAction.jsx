import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
    <>
      <Tooltip title="Previous Record">
        <IconButton
          disabled={!previous}
          aria-label="go to previous record"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            window.location = previous;
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
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
            window.location = recordLink;
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

      <Tooltip title="Next Record">
        <IconButton
          disabled={!next}
          aria-label="go to next record"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            window.location = next;
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

BookmarkDetailAction.propTypes = {};

export default BookmarkDetailAction;
