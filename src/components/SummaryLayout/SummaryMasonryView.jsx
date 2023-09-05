import Masonry from "@mui/lab/Masonry";
import { getAllImageCaptions, getFirstThumbnail } from "../../utils/record";
import SummaryTextField from "../SummaryTextField";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import PropTypes from "prop-types";
import RecordTextField from "../RecordTextField";
import SummaryRecordAction from "./SummaryRecordAction";
import { deepSearch } from "../../utils/functions";
import { Typography } from "@mui/material";
const SummaryMasonryView = (props) => {
  const { data, thumbnailData, xml, updateXML, recordAction = true } = props;
  let XMLRecord = deepSearch(xml, "xml_record")[0];
  if (!Array.isArray(XMLRecord)) {
    XMLRecord = [XMLRecord];
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={4}
        style={{ margin: "0 auto" }}
      >
        {XMLRecord.map((record, i) => {
          let database = record.database_name;
          if (!record.record_link) {
            return null;
          }
          let recordLink = record.record_link.replace(/\n/g, "");
          let recordData = record.record;
          let displayFields = data.find((e) => e.database === database).fields;
          let thumbPic = getFirstThumbnail(record, database);
          let sisn = deepSearch(recordData, "sisn")[0];
          let captions = getAllImageCaptions(record);
          let firstCaption = captions.length > 0 ? captions[0] : "";
          let bookmarkURL = deepSearch(xml, "bookmark_url")[0];
          let isBookmarked = deepSearch(record, "is_bookmarked")[0];
          return (
            <Card variant="outlined" key={i}>
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
                <Typography component="a" href={recordLink} style={{ textAlign: 'center' }}> <img
                  src={thumbPic}
                  style={{ maxWidth: "100%" }}
                  srcSet={thumbPic}
                  loading="lazy"
                  alt={firstCaption}
                /></Typography>
              )}
              <Box
                sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              >
                {
                  recordAction &&
                  <SummaryRecordAction
                    database={database}
                    sisn={sisn} F
                    url={bookmarkURL}
                    updateXML={updateXML}
                    isBookmarked={isBookmarked}
                  />
                }
              </Box>
            </Card>
          );
        })}
      </Masonry>
    </Box>
  );
};

SummaryMasonryView.propTypes = {
  recordAction: PropTypes.bool
};

export default SummaryMasonryView;
