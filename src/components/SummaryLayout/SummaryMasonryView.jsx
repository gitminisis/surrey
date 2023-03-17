import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { getFirstThumbnail } from "../../utils/record";
import SummaryTextField from "../SummaryTextField";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import PropTypes from "prop-types";
import RecordTextField from "../RecordTextField";
import SummaryRecordAction from "./SummaryRecordAction";
import { deepSearch } from "../../utils/functions";
const SummaryMasonryView = (props) => {
  const { data, thumbnailData, xml, updateXML } = props;

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
          let thumbPic = getFirstThumbnail(record, database);
          let sisn = deepSearch(recordData, "sisn")[0];
          let bookmarkURL = deepSearch(xml, "bookmark_url")[0];
          let isBookmarked = deepSearch(record, "is_bookmarked")[0];
          return (
            <Card variant="outlined">
              <div style={{ width: "calc(100% - 85px)" }}>
                <RecordTextField
                  xml={xml}
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
                <SummaryRecordAction
                  database={database}
                  sisn={sisn}
                  url={bookmarkURL}
                  updateXML={updateXML}
                  isBookmarked={isBookmarked}
                />
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
