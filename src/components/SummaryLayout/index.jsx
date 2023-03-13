import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Collapse, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SummaryContainer, Item } from "./SummaryLayout.style";
import SummaryFilter from "./SummaryFilter";
import SummarySubHeader from "./SummarySubHeader";
import SummaryRecordsView from "./SummaryRecordsView";
import GeneralSearchBox from "../GeneralSearchBox";
import SummaryMasonryView from "./SummaryMasonryView";
import SummaryPagination from "./SummaryPagination";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
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
  const [showMobileFilter, setShowMobileFilter] = useState(false);
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
            {filter && (
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={showMobileFilter}
                onClose={() => setShowMobileFilter(false)}
                sx={{
                  display: { lg: "none", xs: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 500,
                    width: "90%",
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose
                    variant="outlined"
                    sx={{
                      top: "calc(-1/4 * var(--IconButton-size))",
                      right: "calc(-1/4 * var(--IconButton-size))",
                      boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                      borderRadius: "50%",
                      bgcolor: "background.body",
                    }}
                  />
                  <SummaryFilter data={filter} xml={xml} />
                </Sheet>
              </Modal>
            )}

            <Grid container rowSpacing={2} style={{ marginTop: "1rem" }}>
              <Grid item xs={12}>
                <SummarySubHeader
                  toggleMobileFilter={toggleMobileFilter}
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
                    updateXML={setXml}
                  />
                ) : (
                  <SummaryRecordsView
                    thumbnailData={thumbnailData}
                    data={displayField}
                    xml={xml}
                    updateXML={setXml}
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
