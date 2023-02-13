import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
const index = (props) => {
  let { main } = props;
  if (main) {
    return (
      <Typography {...props} gutterBottom variant="h3" component="div">
        {props.children}
      </Typography>
    );
  }
  return (
    <Typography variant="subtitle1" color="text.primary" component="div">
      {props.children}
    </Typography>
  );
};

index.propTypes = {};

export default index;
