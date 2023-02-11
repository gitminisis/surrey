import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
const index = (props) => {
  let { main } = props;
  if (main) {
    return (
      <Typography
        {...props}
        component="div"
        variant="h3"
        sx={{
          color: "primary.light",
          fontWeight: "bold",
          fontSize: "1.3rem",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
            color: "text.secondary",
          },
        }}
      >
        {props.children}
      </Typography>
    );
  }
  return (
    <Typography variant="subtitle1" color="text.secondary" component="div">
      {props.children}
    </Typography>
  );
};

index.propTypes = {};

export default index;
