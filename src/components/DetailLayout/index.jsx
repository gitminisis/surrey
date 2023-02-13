import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DetailContainer, Item } from "./DetailLayout.style";
import GeneralSearchBox from "../GeneralSearchBox";
import GeneralDetailSection from "./GeneralSection";
import RecordDetail from "./DetailSection";

const DetailLayout = (props) => {
  console.log(props);
  const { generalSection, detailSection } = props;
  return (
    <div>
      <DetailContainer
        elevation={2}
        sx={{ backgroundColor: "rgb(233, 232, 232,0.4)" }}
      >
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <GeneralSearchBox />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <GeneralDetailSection data={generalSection} />
              </Grid>
              <Grid container item xs={12}>
                <RecordDetail data={detailSection} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DetailContainer>
    </div>
  );
};

DetailLayout.propTypes = {};

export default DetailLayout;
