import React, { useState } from "react";
import {
  BannerContainer,
  BannerBox,
  ShadowLayerBox,
  BannerContent,
  SearchBar,
  InputSearch,
  SubmitSearch,
  SiteHeading,
  HoverLink,
  SiteDescription,
} from "./AdvancedSearchBanner.style";
import {
  Typography,
  Button,
  Grid,
  Paper,
  Collapse,
  CardContent,
  InputBase,
  IconButton,
  Container,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import ToggleSearchFilter from "./ToggleSearchFilter";
import CollapseSearchFilter from "./CollapseSearchFilter";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const Banner = (props) => {
  const [show, setShow] = useState(false);
  const {
    bannerURL,
    heading,
    description,
    toggleSearchFilter,
    collapseSearchFilter,
    children,
  } = props;
  return (
    <>
      <BannerContainer
        maxWidth={"true"}
        className="bannerContainer"
        banner={bannerURL}
      >
        <ShadowLayerBox />
        <Container >
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <SiteHeading variant="h1">{heading}</SiteHeading>
              <SiteDescription variant="p">{description}</SiteDescription>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={12} sm={12} style={{ width: "100%" }}>
              <Paper
                component="form"
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

              {toggleSearchFilter && (
                <ToggleSearchFilter {...toggleSearchFilter.data} />
              )}
            </Grid>
          </Grid>
        </Container>
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
      </BannerContainer>
      <CollapseSearchFilter show={show} {...collapseSearchFilter.data} />
    </>
  );
};
Banner.propTypes = {
  bannerURL: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  toggleSearchFilter: PropTypes.object,
  collapseSearchFilter: PropTypes.object,
};
export default Banner;
