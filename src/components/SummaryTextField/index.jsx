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
          color: "primary.main",
          fontWeight: "bold",
          fontSize: "1.3rem",
          cursor: "pointer",
          marginBottom:'5px',
          "&:hover": {
            textDecoration: "underline",
            color: "primary.dark",
          },
        }}
      >
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
