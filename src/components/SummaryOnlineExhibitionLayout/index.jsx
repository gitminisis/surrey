import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import {
  SummaryContainer,
  Item,
  Main,
  drawerWidth,
} from "../SummaryLayout/SummaryLayout.style";
import SummaryFilter from "../SummaryLayout/SummaryFilter";
import SummarySubHeader from "../SummaryLayout/SummarySubHeader";
import SummaryRecordsView from "../SummaryLayout/SummaryRecordsView";
import GeneralSearchBox from "../GeneralSearchBox";
import SummaryMasonryView from "../SummaryLayout/SummaryMasonryView";
import SummaryPagination from "../SummaryLayout/SummaryPagination";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFilterWrapper from "../SummaryLayout/MobileFilterWrapper";
import DesktopFilterWrapper from "../SummaryLayout/DesktopFilterWrapper";
import Section from "../Section";
const scrollHeight = 330;

const SummaryOnlineExhibitionLayout = (props) => {
  const isMobileDevice = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const {
    filter,
    displayField,
    defaultView,
    thumbnailData,
    generalSearchBox,
    sortOptions,
    application,
  } = props;

  const [grid, setGrid] = useState(
    defaultView ? defaultView === "grid" : false
  );
  const [showFilter, setShowFilter] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [xml, setXml] = useState(getXMLRecord());
  const SummaryView = grid ? SummaryMasonryView : SummaryRecordsView;
  const FilterWrapper = isMobileDevice
    ? MobileFilterWrapper
    : DesktopFilterWrapper;

  const toggleGrid = (a, b) => {
    if (!b || b === undefined) {
      return;
    }
    setGrid(b === "grid");
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  let attachedRecords = deepSearch(xml, 'xml_record')[0];
  attachedRecords = Array.isArray(attachedRecords) ? attachedRecords : [attachedRecords];
  let title = deepSearch(xml, 'oef_title')[0];
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
        >
          <Main
            open={showFilter}
            sx={{
              marginLeft: { md: 0, lg: showFilter ? `${drawerWidth}px` : 0 },
            }}
          >
            <Item elevation={6} sx={{ my: 2 }}>
              {" "}
              <Section
                divider={false}
                heading={deepSearch(xml, "oef_title")[0]}
                description={deepSearch(xml, "oef_description")[0]}
              />
            </Item>
            <Grid item xs={12}>
              <GeneralSearchBox {...generalSearchBox} xml={xml} />
            </Grid>

            {filter && (
              <FilterWrapper
                openDesktop={showFilter}
                openMobile={showMobileFilter}
                onClose={setShowMobileFilter}
              >
                <SummaryFilter
                  application={application}
                  sortOptions={sortOptions}
                  data={filter}
                  xml={xml}
                  updateXML={setXml}
                />
              </FilterWrapper>
            )}

            <Grid container rowSpacing={2} style={{ marginTop: "1rem" }}>
              <Grid item xs={12}>
                <SummarySubHeader
                  statement={`${attachedRecords.length} attached record(s) for ${title}`}
                  toggleMobileFilter={toggleMobileFilter}
                  toggleFilter={toggleFilter}
                  toggleGrid={toggleGrid}
                  isFilter={false}
                  isGrid={grid}
                  xml={xml}
                  statementField="oef_title"
                />
              </Grid>
              <Grid container item xs={12}>
                <SummaryView
                  thumbnailData={thumbnailData}
                  data={displayField}
                  xml={xml}
                  updateXML={setXml}
                  recordAction={false}
                />
                {/* <SummaryPagination xml={xml} /> */}
              </Grid>
            </Grid>
          </Main>
        </Grid>
      </SummaryContainer>
    </div>
  );
};

SummaryOnlineExhibitionLayout.propTypes = {
  filter: PropTypes.array,
  displayField: PropTypes.array,
  defaultView: PropTypes.string,
  thumbnailData: PropTypes.array,
  generalSearchBox: PropTypes.object,
};

export default SummaryOnlineExhibitionLayout;
