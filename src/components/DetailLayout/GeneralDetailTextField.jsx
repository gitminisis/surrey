import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider, Box, Grid } from "@mui/joy";

const index = (props) => {
  let { main, value, label } = props;
  let flattenArrayValue = _.flattenDeep(value);
  if (main) {
    return (
      <Typography {...props} gutterBottom level="h4" sx={{ pb: 2 }}>
        {value.join(", ")}
      </Typography>
    );
  }
  return (
    <>
      <Divider style={{ width: "auto" }} />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          py: 2,
        }}
      >
        <Grid xs={4} sx={{ alignSelf: { xs: "start", md: "center" } }}>
          <Typography
            variant="plain"
            color="primary"
            component="div"
            fontSize="lg"
            level="h6"
            fontWeight={700}
          >
            {label}
          </Typography>
        </Grid>
        <Grid xs sx={{ alignSelf: { xs: "start", md: "center" } }}>
          {flattenArrayValue.map((v) => (
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
