import React from "react";
import PropTypes from "prop-types";
import { InputLabel, Grid, Stack, OutlinedInput, Box } from "@mui/material";
const FieldForm = (props) => {
  const { data, handleChange } = props;
  let { name, label } = data;
  return (
    <Grid item sx={12}>
      <Stack spacing={1}>
        <Grid container spacing={2} sx={{ maxWidth: "1000px" }}>
          <Grid item xs={12} md={6}>
            {" "}
            <InputLabel htmlFor={label}>Field Label</InputLabel>
            <OutlinedInput
              onChange={(e) => {
                data.label = e.target.value;
                handleChange(data);
              }}
              id={label}
              type="text"
              placeholder="Field Label"
              defaultValue={label}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            {" "}
            <InputLabel htmlFor={name}>Field Mnemonic</InputLabel>
            <OutlinedInput
              onChange={(e) => {
                data.name = e.target.value;
                handleChange(data);
              }}
              id={name}
              type="text"
              placeholder="Field Mnemonic"
              defaultValue={name}
            />
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
};

FieldForm.propTypes = {
  handleChange: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.boolean,
    label: PropTypes.string.isRequired,
    component: PropTypes.bool,
  }),
};

export default FieldForm;
