import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import {
  SummaryContainer,
  Item,
  Main,
  drawerWidth,
} from "./SummaryLayout.style";
import SummaryFilter from "./SummaryFilter";
import SummarySubHeader from "./SummarySubHeader";
import SummaryRecordsView from "./SummaryRecordsView";
import GeneralSearchBox from "../GeneralSearchBox";
import SummaryMasonryView from "./SummaryMasonryView";
import SummaryPagination from "./SummaryPagination";
import { getXMLRecord } from "../../utils/functions";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFilterWrapper from "./MobileFilterWrapper";
import DesktopFilterWrapper from "./DesktopFilterWrapper";

const SummaryLayout = (props) => {
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

  const dataPage = document.querySelector("#root").dataset.page;
  const pageView = sessionStorage.getItem(dataPage)
  const [grid, setGrid] = useState(
    defaultView ? (pageView ? pageView === 'grid' : defaultView === "grid") : false
  );
  const [showFilter, setShowFilter] = useState(filter ? true : false);
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
    sessionStorage.setItem(dataPage, b === "grid" ? "grid" : "list")
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
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
        >
          <Main
            open={showFilter}
            sx={{
              marginLeft: { md: 0, lg: showFilter ? `${drawerWidth}px` : 0 },
            }}
          >
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
                  toggleMobileFilter={toggleMobileFilter}
                  toggleFilter={toggleFilter}
                  toggleGrid={toggleGrid}
                  isGrid={grid}
                  xml={xml}
                />
              </Grid>
              <Grid container item xs={12}>
                <SummaryView
                  thumbnailData={thumbnailData}
                  data={displayField}
                  xml={xml}
                  updateXML={setXml}
                />
                <SummaryPagination xml={xml} />
              </Grid>
            </Grid>
          </Main>
        </Grid>
      </SummaryContainer>
    </div>
  );
};

SummaryLayout.propTypes = {
  filter: PropTypes.array,
  displayField: PropTypes.array,
  defaultView: PropTypes.string,
  thumbnailData: PropTypes.array,
  generalSearchBox: PropTypes.object,
};

export default SummaryLayout;
