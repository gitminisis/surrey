import React, { useState, useEffect } from "react";
import {
  BannerContainer,
  BannerBox,
  ShadowLayerBox,
  BannerContent,
  SearchBar,
  InputSearch,
  SubmitSearch,
  SiteHeading,
  SiteDescription,
} from "./SimpleSearchBanner.style";
import {
  Typography,
  Button,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

import MobileStepper from "@mui/material/MobileStepper";

const SEARCH_URL =
  "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM";
const Banner = (props) => {
  const {
    bannerURL,
    heading,
    description,
    noSearchBox,
    children,
    bannerCarousel,
  } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 5) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <BannerContainer
        maxWidth={"true"}
        className="bannerContainer"
        banner={bannerURL}
      >
        <Container maxWidth={"xl"}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <SiteHeading variant="h1">{heading}</SiteHeading>
              <SiteDescription variant="p">{description}</SiteDescription>
            </Grid>
          </Grid>
          {!noSearchBox ? (
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} style={{ width: "100%" }}>
                <Paper
                  method="POST"
                  component="form"
                  action={SEARCH_URL}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "800px",
                    margin: "80px auto",
                    textAlign: "center",
                    boxShadow: "2px 4px 2px 0px rgba(1,1,1,0.5)",
                  }}
                >
                  <InputBase
                    name="KEYWORD_CL"
                    style={{ height: "55px", fontSize: "1.2rem" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter your search"
                    inputProps={{ "aria-label": "Enter your search" }}
                  />
                  <Button
                    style={{
                      height: "55px",
                      borderTop: "0",
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                    type="submit"
                    aria-label="search"
                    variant="contained"
                  >
                    Search
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          ) : null}
        </Container>

        {children}
      </BannerContainer>
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{
          textAlign: "center",
          margin: "0 auto",
          position: "absolute",
          bottom: 0,
          color: "white",
          right: "0",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
    </>
  );
};
Banner.propTypes = {
  bannerURL: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  noSearchBox: PropTypes.bool,
  bannerCarousel: PropTypes.arrayOf(PropTypes.string),
};
export default Banner;
