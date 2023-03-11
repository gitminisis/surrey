import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LinkIcon from "@mui/icons-material/Link";
import { bookmarkRecord } from "../../utils/record";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ToastNotification from "../ToastNotification";
const SummaryRecordAction = (props) => {
  const { database, url, sisn, updateXML, isBookmarked } = props;
  const [showToast, setShowToast] = useState(false);
  const [message, setMesssage] = useState("");
  return (
    <>
      <ToastNotification message={message} show={showToast} />
      <IconButton
        aria-label="bookmark"
        variant="plain"
        color="neutral"
        size="md"
        onClick={(_) =>
          bookmarkRecord(url, sisn, database, updateXML).then((_) => {
            setMesssage(
              `Record SISN #${sisn} has been successfully added to the bookmark !`
            );

            setShowToast(true);
          })
        }
      >
        {isBookmarked && isBookmarked === "true" ? (
          <BookmarkAddedIcon />
        ) : (
          <BookmarkAdd />
        )}
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
