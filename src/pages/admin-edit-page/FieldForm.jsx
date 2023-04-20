import PropTypes from "prop-types";
import { InputLabel, Grid, Stack, OutlinedInput } from "@mui/material";
const FieldForm = (props) => {
  const { data } = props;
  let { name, description, type, value, defaultValue, editable } = data;
  if (!editable) {
    return null;
  }
  if (type === "array") {
    return (
      <Grid item sx={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor={name}>{name}</InputLabel>
          {value.map((v, i) => {
            return (
              <Stack key={i} spacing={1}>
                <OutlinedInput
                  id={name}
                  type="text"
                  defaultValue={v}
                  fullWidth
                />
              </Stack>
            );
          })}
        </Stack>
      </Grid>
    );
  }
  return (
    <Grid item sx={12}>
      <Stack spacing={1}>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        <OutlinedInput
          id={name}
          type="text"
          placeholder={defaultValue}
          defaultValue={value}
          fullWidth
        />
      </Stack>
    </Grid>
  );
};

FieldForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    editable: PropTypes.bool,
  }),
};

export default FieldForm;
