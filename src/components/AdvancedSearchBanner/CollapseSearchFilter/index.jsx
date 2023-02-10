import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  CardContent,
  Typography,
  Button,
  Autocomplete,
  TextField,
  Item,
  Container,
  Grid,
  Chip,
  Divider,
} from "@mui/material";
const CollapseSearchFilter = (props) => {
  let { show, data, description } = props;
  console.log(props);
  return (
    <>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>
            <Grid container spacing={2}>
              {data.map((e, i) => (
                <Grid item xs={12} sm={6} xl={3}>
                  <Autocomplete
                    disablePortal
                    options={e.data}
                    renderInput={(params) => (
                      <TextField {...params} label={e.title} />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>
        <Divider>
          <Chip label={description} />
        </Divider>
      </Collapse>
    </>
  );
};

CollapseSearchFilter.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.array,
  description: PropTypes.string,
};

export default CollapseSearchFilter;
