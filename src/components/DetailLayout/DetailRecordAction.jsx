import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LinkIcon from "@mui/icons-material/Link";
import { bookmarkRecord, copyToClipboard } from "../../utils/record";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useSnackbar } from "notistack";
import { printPage } from "../../utils/functions";
import PrintIcon from "@mui/icons-material/Print";
import { Tooltip } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const DetailRecordAction = (props) => {
  console.log(props);
  const { enqueueSnackbar } = useSnackbar();
  const { database, url, sisn, updateXML, isBookmarked, size } = props;
  return (
    <>
      <Tooltip title="Previous Record">
        <IconButton
          aria-label="go to previous record"
          variant="plain"
          color="neutral"
          size={size || "md"}
          onClick={(_) => {
            printPage();
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Return to summary page">
        <IconButton
          aria-label="return to summary page"
          variant="plain"
          color="neutral"
          size={size || "md"}
          onClick={(_) => {
            printPage();
          }}
        >
          <UndoIcon />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={
          isBookmarked === "true"
            ? "Added to the bookmark"
            : "Bookmark this record"
        }
      >
        <IconButton
          aria-label="bookmark"
          variant="plain"
          color="neutral"
          size={size || "md"}
          onClick={(_) => {
            if (isBookmarked === "true") {
              enqueueSnackbar("This record has already been bookmarked");
              return;
            }
            enqueueSnackbar(`Adding record SISN #${sisn} to the bookmark ...`, {
              variant: "info",
            });
            bookmarkRecord(url, sisn, database).then((_) => {
              enqueueSnackbar(
                `Record SISN #${sisn} has been successfully added to the bookmark!`
              );
              setTimeout(() => {
                location.reload();
              }, 2000);
            });
          }}
        >
          {isBookmarked === "true" ? <BookmarkAddedIcon /> : <BookmarkAdd />}
        </IconButton>
      </Tooltip>

      <Tooltip title="Copy this record URL">
        <IconButton
          aria-label="copy link"
          variant="plain"
          color="neutral"
          size={size || "md"}
          onClick={(_) => {
            copyToClipboard(sisn, database);
            enqueueSnackbar(`Copied to clipboard`);
          }}
        >
          <LinkIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Print this page">
        <IconButton
          aria-label="print page"
          variant="plain"
          color="neutral"
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
          aria-label="go to next record"
          variant="plain"
          color="neutral"
          size={size || "md"}
          onClick={(_) => {
            printPage();
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

DetailRecordAction.propTypes = {};

export default DetailRecordAction;
