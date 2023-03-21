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
  HoverLink,
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
import CollapseSearchFilter from "../AdvancedSearchBanner/CollapseSearchFilter";

import MobileStepper from "@mui/material/MobileStepper";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Banner = (props) => {
  const {
    bannerURL,
    searchURL,
    heading,
    description,
    noSearchBox,
    children,
    bannerCarousel,
    collapseSearchFilter,
  } = props;
  const [show, setShow] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === bannerCarousel.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <BannerContainer
        style={{ padding: "0 0" }}
        maxWidth={"true"}
        className="bannerContainer back-top-anchor"
        banner={bannerCarousel[activeStep]}
      >
        <ShadowLayerBox banner={bannerCarousel[activeStep]} />
        <Container
          maxWidth={false}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "20%",
            margin: "0 0",
            background: "rgb(0, 0, 0, 0.4)",
            zIndex: "4",
          }}
        >
          <Grid container spacing={2} data-aos="fade-down">
            <Grid item sm={12}>
              <SiteHeading variant="h1">{heading}</SiteHeading>
              <SiteDescription variant="p">{description}</SiteDescription>
            </Grid>
          </Grid>
          {!noSearchBox ? (
            <Grid container spacing={2} data-aos="fade-down">
              <Grid item md={12} sm={12} style={{ width: "100%" }}>
                <Paper
                  method="POST"
                  component="form"
                  action={searchURL}
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
                    placeholder="Search By Keyword"
                    inputProps={{ "aria-label": "Search By Keyword" }}
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
        {collapseSearchFilter && (
          <HoverLink
            variant="h5"
            color="secondary"
            sx={{}}
            onClick={(_) => {
              setShow(!show);
            }}
          >
            {collapseSearchFilter.data.description}
            <br />{" "}
            <span>
              {!show ? (
                <KeyboardDoubleArrowDownIcon />
              ) : (
                <KeyboardDoubleArrowUpIcon />
              )}
            </span>
          </HoverLink>
        )}
      </BannerContainer>
      <MobileStepper
        variant="dots"
        steps={bannerCarousel.length}
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
      {collapseSearchFilter && (
        <CollapseSearchFilter show={show} {...collapseSearchFilter.data} />
      )}
    </>
  );
};
Banner.propTypes = {
  bannerURL: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  noSearchBox: PropTypes.bool,
  bannerCarousel: PropTypes.arrayOf(PropTypes.string),
  searchURL: PropTypes.string,
  collapseSearchFilter: PropTypes.object,
};
export default Banner;
