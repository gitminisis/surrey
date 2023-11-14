import React, { useState } from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@mui/material";
const LayoutBackdrop = (props) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={props.open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

LayoutBackdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default LayoutBackdrop;
