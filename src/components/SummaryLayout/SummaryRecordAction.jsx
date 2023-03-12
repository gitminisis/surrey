import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LinkIcon from "@mui/icons-material/Link";
import { bookmarkRecord, copyToClipboard } from "../../utils/record";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useSnackbar } from "notistack";

import { Tooltip } from "@mui/material";
const SummaryRecordAction = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { database, url, sisn, updateXML, isBookmarked } = props;
  return (
    <>
      <IconButton
        aria-label="bookmark"
        variant="plain"
        color="neutral"
        size="md"
        onClick={(_) => {
          if (isBookmarked) {
            enqueueSnackbar("This record has already been bookmarked");
            return;
          }

          enqueueSnackbar(`Adding record SISN #${sisn} to the bookmark`, {
            variant: "info",
          });
          bookmarkRecord(url, sisn, database, updateXML).then((_) => {
            enqueueSnackbar(
              `Record SISN #${sisn} has been successfully added to the bookmark !`
            );
          });
        }}
      >
        {isBookmarked && isBookmarked === "true" ? (
          <Tooltip title="Added to the bookmark">
            <BookmarkAddedIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Bookmark this record">
            {" "}
            <BookmarkAdd />
          </Tooltip>
        )}
      </IconButton>
      <IconButton
        aria-label="copy link"
        variant="plain"
        color="neutral"
        size="md"
        onClick={(_) => {
          copyToClipboard(sisn, database);
          enqueueSnackbar(`Copied to clipboard`);
        }}
      >
        <Tooltip title="Copy this record URL">
          <LinkIcon />
        </Tooltip>
      </IconButton>
    </>
  );
};

SummaryRecordAction.propTypes = {};

export default SummaryRecordAction;
