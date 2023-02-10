import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Container, Grid, Divider } from "@mui/material";
import {
  SectionContainer,
  SubHeading,
  SubDescription,
  ViewMore,
  ActionButton,
} from "./Section.style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const Section = (props) => {
  const {
    heading,
    description,
    url = "/",
    urlTitle,
    children,
    btnURL,
    btnTitle,
  } = props;
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <SectionContainer maxWidth={"true"} dimension={windowDimensions}>
      <Divider />
      <Container maxWidth={"xl"}>
        <div>
          {heading && <SubHeading as="h2">{heading}</SubHeading>}
          {description && <SubDescription as="p">{description}</SubDescription>}
          {urlTitle && <ViewMore href={url} text={urlTitle} />}
        </div>
        {btnURL && (
          <ActionButton
            variant="contained"
            color="secondary"
            onClick={(_) => (window.location = btnURL)}
          >
            {btnTitle}
          </ActionButton>
        )}
        <Grid container spacing={2} sx={{ marginTop: "30px" }}>
          {children}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlTitle: PropTypes.string,
  btnURL: PropTypes.string,
  btnTitle: PropTypes.string,
};

export default Section;
