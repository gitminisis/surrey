import PropTypes from "prop-types";
import { Item } from "./DetailLayout.style";
import { Box, Typography, Grid, Container } from "@mui/material";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import GeneralDetailTextField from "./GeneralDetailTextField";
import RecordTextField from "../RecordTextField";
import ImageGallerySlide from "../ImageGallerySlide";
import { getAllMedia, getAllImageCaptions } from "../../utils/record";
import DetailRecordAction from "./DetailRecordAction";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import Component from "../Component";
const GeneralSection = (props) => {
  const { data, xml, updateXML, recordAction } = props;
  let showTree = props.showTree === undefined ? true : props.showTree;
  let RecordAction = props.recordAction;
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
  let children = data.children;
  let captions = getAllImageCaptions(record);
  return (
    <Item sx={{ padding: "16px" }} elevation={6}>
      <Container disableGutters maxWidth={"lg"} style={{ margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
          }}
        >
          <Grid item xs={12} sm container sx={{ pt: 4, paddingLeft: 0 }}>
            <Grid
              item
              sx={{
                margin: "0 auto",
                maxWidth: "100%",
                minWidth: "300px",
                width: "300px",
              }}
            >
              {visualsMedia.length > 0 ? (
                <ImageGallerySlide
                  imageCaptions={captions}
                  images={images}
                  audio={audio}
                  video={video}
                />
              ) : (
                <Box sx={{ mb: 4 }}>
                  <ImageNotSupportedIcon
                    style={{ fontSize: "100px", marginBottom: "16px" }}
                  />
                  <Typography variant="h5" component="p">
                    No Available Media
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              sx={{ margin: "0 auto" }}
            >
              <Grid
                xs
                sx={{
                  width: "80%",
                  textAlign: "left",
                  maxWidth: "700px",
                  margin: "0 auto",
                  minWidth: "300px",
                  paddingLeft: 0,
                }}
              >
                <RecordTextField
                  xml={xml}
                  displayFields={displayFields}
                  recordData={recordData}
                  displayComponent={GeneralDetailTextField}
                />
                {children &&
                  children.map((e) => {
                    if (!e.data.displayDatabase.includes(database)) {
                      return;
                    }
                    if (e.component === "DescriptionTree") {
                      let isDisplayed =
                        showTree && e.data.displayDatabase.includes(database);
                      e.data.showTree = isDisplayed;
                    }

                    if (e.component === "MediaCard") {
                      let ids = deepSearch(xml, "m3_oef_id")[0]
                      e.data.recordIds = Array.isArray(ids) ? ids : [ids];
                    }
                    e.data ? (e.data.xml = xml) : (e.data = { ...xml });
                    return Component(e);
                  })}
              </Grid>

              <Grid xs>
                {!recordAction ? (
                  <DetailRecordAction
                    size="lg"
                    xml={xml}
                    database={database}
                    sisn={sisn}
                    url={bookmarkURL}
                    updateXML={updateXML}
                    isBookmarked={isBookmarked}
                  />
                ) : (
                  <RecordAction />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Item>
  );
};

GeneralSection.propTypes = {};

export default GeneralSection;
