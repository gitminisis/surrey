import * as React from "react";
import Typography from "@mui/joy/Typography";
import { Item } from "./SummaryLayout.style";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import { getFirstThumbnail, getAllImageCaptions } from "../../utils/record";
import SummaryTextField from "../SummaryTextField";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import SummaryRecordAction from "./SummaryRecordAction";
import RecordTextField from "../RecordTextField";
const SummaryRecordsView = (props) => {
  const { data, thumbnailData, xml, updateXML, recordAction = true } = props;
  let XMLRecord = deepSearch(xml, "xml_record")[0];
  if (!Array.isArray(XMLRecord)) {
    XMLRecord = [XMLRecord];
  }
  return (
    <>
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
          <Grid item xs={12} key={`SummaryRecordsView-${i}`}>
            <Item sx={{ padding: "16px", borderRadius: "0" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  position: "relative",
                }}
                elevation={5}
              >
                <Box sx={{ display: "flex" }}>
                  {thumbPic && (
                    <Typography component="a" href={recordLink}>
                      <CardMedia
                        onClick={(_) => (window.location = recordLink)}
                        component="img"
                        sx={{
                          margin: "0 0",
                          width: "25vw",
                          maxWidth: "200px",
                          cursor: "pointer",
                          // height: "100%",
                        }}
                        image={thumbPic}
                        alt={firstCaption}
                      />
                    </Typography>
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    minHeight: "160",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <RecordTextField
                      xml={xml}
                      displayFields={displayFields}
                      recordData={recordData}
                      recordLink={recordLink}
                      displayComponent={SummaryTextField}
                    />
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                      position: { xs: "inherit", lg: "absolute" },
                      top: "16px",
                      right: "16px",
                    }}
                  >
                    {recordAction && (
                      <SummaryRecordAction
                        database={database}
                        sisn={sisn}
                        url={bookmarkURL}
                        updateXML={updateXML}
                        isBookmarked={isBookmarked}
                      />
                    )}
                  </Box>
                </Box>
              </Card>
            </Item>
          </Grid>
        );
      })}
    </>
  );
};
SummaryRecordsView.propTypes = {
  data: PropTypes.array,
  isGrid: PropTypes.bool,
  recordAction: PropTypes.bool,
};

export default SummaryRecordsView;
