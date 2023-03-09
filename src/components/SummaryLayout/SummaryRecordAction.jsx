import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LinkIcon from "@mui/icons-material/Link";
import { bookmarkRecord } from "../../utils/record";
const SummaryRecordAction = (props) => {
  const { database, url, sisn } = props;
  return (
    <>
      <IconButton
        aria-label="bookmark"
        variant="plain"
        color="neutral"
        size="md"
        onClick={(_) => bookmarkRecord(url, sisn, database)}
      >
        <BookmarkAdd />
      </IconButton>
      <IconButton
        aria-label="copy link"
        variant="plain"
        color="neutral"
        size="md"
      >
        <LinkIcon />
      </IconButton>
    </>
  );
};

SummaryRecordAction.propTypes = {};

export default SummaryRecordAction;
