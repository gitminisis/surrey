import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Drawer, Skeleton, Container } from "@mui/material";
import {
  SummaryContainer,
  Main,
  drawerWidth,
  Item,
} from "./SummaryBookmarkLayout.style";
import GeneralSearchBox from "../GeneralSearchBox";
import SummaryBookmarkSubHeader from "./SummaryBookmarkSubHeader";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import { fetchJSONRecord, getFirstThumbnail } from "../../utils/record";
import GeneralSection from "../DetailLayout/GeneralSection";
import BookmarkDetailAction from "./BookmarkDetailAction";
import ImageCarousel from "../ImageCarousel";

const BookmarkLoadingSkeleton = (props) => {
  return (
    <Item sx={{ padding: "16px" }} elevation={6}>
      <Container disableGutters maxWidth={"lg"} style={{ margin: "0 auto" }}>
        <Skeleton variant="rectangular" width={210} height={60} />
      </Container>
    </Item>
  );
};
const SummaryBookmarkLayout = (props) => {
  const { generalSearchBox, generalSection } = props;
  const [showSidebar, setShowSidebar] = useState(true);
  const [xml, setXml] = useState(getXMLRecord());
  const [currentDetailXml, setCurrentDetailXml] = useState(null);
  const [bookmarkLoading, setBookmarkLoading] = useState(true);
  const bookmarkListToImageCarouselData = (xml) => {
    if (!Array.isArray(xml.xml.xml_record)) {
      xml.xml.xml_record = [xml.xml.xml_record];
    }
    let res = xml.xml.xml_record.map((record) => {
      let database = record.database_name;
      let thumbnail = getFirstThumbnail(record, database);
      return {
        thumbnail,
        title: record.title,
      };
    });
    console.log(res);
    return res;
    //  return xml.xml_record.record()
  };
  useEffect((_) => {
    let firstRecord = deepSearch(xml, "xml_record")[0];
    if (Array.isArray(firstRecord)) {
      firstRecord = firstRecord[0];
    }
    fetchJSONRecord(
      firstRecord.database_name,
      [firstRecord.link_sisn],
      setCurrentDetailXml
    ).then((res) => {
      console.log(res);

      setBookmarkLoading(false);
    });
  }, []);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <SummaryContainer
        elevation={2}
        sx={{ backgroundColor: "rgb(233, 232, 232,0.4)" }}
      >
        <Grid
          container
          spacing={2}
          rowSpacing={2}
          style={{ position: "relative", width: "100vw" }}
        ></Grid>

        <Grid item xs={12}>
          <GeneralSearchBox {...generalSearchBox} />
        </Grid>

        <Grid container rowSpacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12}>
            <SummaryBookmarkSubHeader
              xml={xml}
              // toggleMobileFilter={toggleMobileFilter}
              toggleSidebar={toggleSidebar}
            />
          </Grid>

          <Grid item xs={12}>
            {bookmarkLoading ? <BookmarkLoadingSkeleton /> : null}
            {currentDetailXml &&
              (!bookmarkLoading ? (
                <GeneralSection
                  data={generalSection}
                  xml={currentDetailXml}
                  updateXML={setCurrentDetailXml}
                  recordAction={(_) => (
                    <BookmarkDetailAction xml={currentDetailXml} />
                  )}
                />
              ) : null)}
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth={"true"}>
              <ImageCarousel data={bookmarkListToImageCarouselData(xml)} />
            </Container>
          </Grid>
        </Grid>

        <>{props.children}</>
      </SummaryContainer>
    </div>
  );
};

SummaryBookmarkLayout.propTypes = {};

export default SummaryBookmarkLayout;
