import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider, Box, Grid } from "@mui/joy";
const index = (props) => {
  let { main, value, label } = props;
  console.log(value, label);
  if (main) {
    return (
      <Typography {...props} gutterBottom level="h4" sx={{ margin: "32px 0" }}>
        {value.join(", ")}
      </Typography>
    );
  }
  return (
    <>
      <Divider style={{ width: "auto" }} />
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", flexDirection: "row", py: 2 }}
      >
        <Grid xs={4} sx={{ alignSelf: "center" }}>
          {" "}
          <Typography
            variant="plain"
            color="primary"
            component="div"
            fontSize="lg"
            level="h6"
            fontWeight="lg"
            sx={{ width: "150px", alignSelf: "center" }}
          >
            {label}
          </Typography>
        </Grid>
        <Grid xs={8} sx={{ alignSelf: "center" }}>
          {value.map((v) => (
            <Typography level="h6" component="div" sx={{ display: "block" }}>
              {v}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

index.propTypes = {};

export default index;
