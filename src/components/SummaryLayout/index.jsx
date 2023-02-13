import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SummaryContainer, Item } from "./SummaryLayout.style";
import SummaryFilter from "./SummaryFilter";
import SummarySubHeader from "./SummarySubHeader";
import SummaryRecordsView from "./SummaryRecordsView";
import GeneralSearchBox from "../GeneralSearchBox";
import SummaryMasonryView from "./SummaryMasonryView";
const SummaryLayout = (props) => {
  const { filter, displayField } = props;
  if (!localStorage.getItem("grid")) {
    localStorage.setItem("grid", true);
  }
  const [grid, setGrid] = useState(localStorage.getItem("grid") === "true");

  const toggleGrid = () => {
    localStorage.setItem("grid", !grid);
    setGrid(!grid);
  };
  return (
    <div>
      <SummaryContainer
        elevation={2}
        sx={{ backgroundColor: "rgb(233, 232, 232,0.4)" }}
      >
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <GeneralSearchBox />
          </Grid>
          <Grid item xs={0} md={3} display={{ xs: "none", md: "block" }}>
            <SummaryFilter data={filter} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <SummarySubHeader toggleGrid={toggleGrid} isGrid={grid} />
              </Grid>
              <Grid container item xs={12}>
                {grid ? (
                  <SummaryMasonryView data={displayField} />
                ) : (
                  <SummaryRecordsView data={displayField} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SummaryContainer>
    </div>
  );
};

SummaryLayout.propTypes = {
  filter: PropTypes.array,
  displayField: PropTypes.array,
};

export default SummaryLayout;
