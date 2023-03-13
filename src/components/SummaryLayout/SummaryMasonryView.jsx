import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import { getFirstThumbnail } from "../../utils/record";
import SummaryTextField from "../SummaryTextField";
import Component from "../Component";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import IconButton from "@mui/joy/IconButton";
import PropTypes from "prop-types";
import LinkIcon from "@mui/icons-material/Link";
import RecordTextField from "../RecordTextField";
const SummaryMasonryView = (props) => {
  const { data, thumbnailData, xml } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={4}
        style={{ margin: "0 auto" }}
      >
        {xml.xml.xml_record.map((record) => {
          let database = record.database_name;
          let recordLink = record.record_link.replace(/\n/g, "");
          let recordData = record.record;
          let displayFields = data.find((e) => e.database === database).fields;

          let thumbPic = getFirstThumbnail(record, thumbnailData, database);

          return (
            <Card variant="outlined">
              <div style={{ width: "90%" }}>
                <RecordTextField
                  gridDisplay={true}
                  displayFields={displayFields}
                  recordData={recordData}
                  recordLink={recordLink}
                  displayComponent={SummaryTextField}
                />
              </div>
              {thumbPic && (
                <img
                  src={thumbPic}
                  style={{ maxWidth: "100%" }}
                  srcSet={thumbPic}
                  loading="lazy"
                  alt=""
                />
              )}
              <Box
                sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              >
                <IconButton
                  aria-label="bookmark"
                  variant="plain"
                  color="neutral"
                  size="sm"
                >
                  <BookmarkAdd />
                </IconButton>
                <IconButton
                  aria-label="copy link"
                  variant="plain"
                  color="neutral"
                  size="sm"
                >
                  <LinkIcon />
                </IconButton>
              </Box>
            </Card>
          );
        })}
      </Masonry>
    </Box>
  );
};

SummaryMasonryView.propTypes = { thumbnailData: PropTypes.object };

export default SummaryMasonryView;
