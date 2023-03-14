import React from "react";
import PropTypes from "prop-types";
import { Item } from "./DetailLayout.style";
import { Box, Typography, Grid, ButtonBase, Container } from "@mui/material";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import GeneralDetailTextField from "./GeneralDetailTextField";
import RecordTextField from "../RecordTextField";
import ImageGallerySlide from "../ImageGallerySlide";
import { getAllMedia } from "../../utils/record";
import DetailRecordAction from "./DetailRecordAction";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
const GeneralSecion = (props) => {
  const { data, xml, updateXML } = props;

  let record = xml.xml.xml_record;
  let database = record.database_name;
  let recordData = record.record;
  let displayFields = data.displayFields.find(
    (e) => e.database === database
  ).fields;
  let images = getAllMedia(record, database);
  let audio = getAllMedia(record, database, "audio");
  let video = getAllMedia(record, database, "video");
  let visualsMedia = [...images, ...audio, ...video];
  let sisn = deepSearch(recordData, "sisn")[0];
  let bookmarkURL = deepSearch(xml, "bookmark_url")[0];
  let isBookmarked = deepSearch(record, "is_bookmarked")[0];
  return (
    <Item sx={{ padding: "10px 16px" }} elevation={6}>
      <Container disableGutters maxWidth={"lg"} style={{ margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
          }}
        >
          <Grid item xs={12} sm container spacing={2} sx={{ pt: 4 }}>
            <Grid item sx={{ margin: "0 auto" }}>
              {visualsMedia.length > 0 ? (
                <ImageGallerySlide
                  images={images}
                  audio={audio}
                  video={video}
                />
              ) : (
                <Box>
                  <ImageNotSupportedIcon />
                </Box>
              )}
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid
                item
                xs
                sx={{
                  width: "80%",
                  textAlign: "left",
                  maxWidth: "700px",
                  margin: "0 auto",
                  minWidth: "300px",
                }}
              >
                <RecordTextField
                  displayFields={displayFields}
                  recordData={recordData}
                  displayComponent={GeneralDetailTextField}
                />
              </Grid>
              <Grid item>
                <DetailRecordAction
                  size="lg"
                  database={database}
                  sisn={sisn}
                  url={bookmarkURL}
                  updateXML={updateXML}
                  isBookmarked={isBookmarked}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Item>
  );
};

GeneralSecion.propTypes = {};

export default GeneralSecion;
