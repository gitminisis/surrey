import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Collapse, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SummaryContainer, Item } from "./SummaryLayout.style";
import SummaryFilter from "./SummaryFilter";
import SummarySubHeader from "./SummarySubHeader";
import SummaryRecordsView from "./SummaryRecordsView";
import GeneralSearchBox from "../GeneralSearchBox";
import SummaryMasonryView from "./SummaryMasonryView";
import SummaryPagination from "./SummaryPagination";
import { deepSearch, getXMLRecord } from "../../utils/functions";
const drawerWidth = 300;
const scrollHeight = 330;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 2,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: `${drawerWidth}px`,
      },
      [theme.breakpoints.down("md")]: { marginLeft: 0 },
    }),
  })
);

const SummaryLayout = (props) => {
  const { filter, displayField, defaultView, thumbnailData, generalSearchBox } =
    props;

  const [grid, setGrid] = useState(
    defaultView ? defaultView === "grid" : false
  );
  const [showFilter, setShowFilter] = useState(true);
  const [xml, setXml] = useState(getXMLRecord());
  const toggleGrid = (a, b) => {
    if (!b || b === undefined) {
      return;
    }
    setGrid(b === "grid");
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
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
              <GeneralSearchBox {...generalSearchBox} />
            </Grid>
            {filter && (
              <Drawer
                sx={{
                  width: "100%",
                  display: { xs: "none", lg: "flex" },
                }}
                variant="persistent"
                anchor="left"
                open={showFilter}
              >
                <SummaryFilter data={filter} xml={xml} />
              </Drawer>
            )}

            <Grid container rowSpacing={2} style={{ marginTop: "1rem" }}>
              <Grid item xs={12}>
                <SummarySubHeader
                  toggleFilter={toggleFilter}
                  toggleGrid={toggleGrid}
                  isGrid={grid}
                />
              </Grid>
              <Grid container item xs={12}>
                {grid ? (
                  <SummaryMasonryView
                    thumbnailData={thumbnailData}
                    data={displayField}
                    xml={xml}
                  />
                ) : (
                  <SummaryRecordsView
                    thumbnailData={thumbnailData}
                    data={displayField}
                    xml={xml}
                  />
                )}
                <SummaryPagination />
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
