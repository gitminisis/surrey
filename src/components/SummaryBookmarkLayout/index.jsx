import React, { useState, useEffect, useCallback } from "react";
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
import { deepSearch, getKeyByValue, getXMLRecord } from "../../utils/functions";
import {
  fetchJSONRecord,
  getFirstThumbnail,
  removeBookmarkFromKey,
  removeBookmarkFromSISN,
} from "../../utils/record";
import GeneralSection from "../DetailLayout/GeneralSection";
import BookmarkDetailAction from "./BookmarkDetailAction";
import ImageCarousel from "../ImageCarousel";
import { useSnackbar } from "notistack";

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
  const { enqueueSnackbar } = useSnackbar();
  const { generalSearchBox, generalSection } = props;
  const [showSidebar, setShowSidebar] = useState(true);
  const [xml, setXml] = useState(getXMLRecord());
  const [currentDetailXml, setCurrentDetailXml] = useState(null);
  const [bookmarkLoading, setBookmarkLoading] = useState(true);
  const [loadedDetailRecord, setLoadedDetailRecord] = useState(new Map());
  useEffect((_) => {
    fetchRecord(0).then((res) => {
      updateLoadedDetailRecord(0, res);
      setBookmarkLoading(false);
    });
  }, []);
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
    return res;
  };
  const updateLoadedDetailRecord = (k, v) => {
    setLoadedDetailRecord(loadedDetailRecord.set(k, v));
  };

  const getRecordByIndex = (i) => {
    let record = deepSearch(xml, "xml_record")[0];
    if (Array.isArray(record)) {
      record = record[i];
    }
    return record;
  };
  const fetchRecord = (i) => {
    let record = getRecordByIndex(i);
    let session = deepSearch(xml, "session")[0];
    return fetchJSONRecord(
      session,
      record.database_name,
      [record.link_sisn],
      setCurrentDetailXml
    );
  };

  const switchRecord = (i) => {
    if (bookmarkLoading) {
      enqueueSnackbar(`Please wait while record is being loaded.`, {
        variant: "info",
      });
      return;
    }
    let loadedRecord = loadedDetailRecord.get(i);
    if (loadedRecord !== undefined) {
      setCurrentDetailXml(loadedRecord);
    } else {
      setBookmarkLoading(true);
      fetchRecord(i).then((res) => {
        updateLoadedDetailRecord(i, res);
        setBookmarkLoading(false);
      });
    }
  };

  const removeBookmark = (record) => {
    let index = getKeyByValue(loadedDetailRecord, record);
    let res = getRecordByIndex(index);
    let sisn = deepSearch(res, "_value")[0];
    removeBookmarkFromSISN(record, sisn, index + 1).then((res) => {
      location.reload();
    });
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
              // toggleSidebar={toggleSidebar}
            />
          </Grid>

          <Grid item xs={12}>
            {bookmarkLoading ? <BookmarkLoadingSkeleton /> : null}
            {currentDetailXml && !bookmarkLoading && (
              <GeneralSection
                showTree={false}
                data={generalSection}
                xml={currentDetailXml}
                updateXML={setCurrentDetailXml}
                recordAction={(_) => (
                  <BookmarkDetailAction
                    xml={currentDetailXml}
                    removeBookmark={removeBookmark}
                  />
                )}
              />
            )}
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth={"true"}>
              <ImageCarousel
                data={bookmarkListToImageCarouselData(xml)}
                handleClick={switchRecord}
                loop={false}
                autoplay={false}
              />
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
