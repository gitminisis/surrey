import PropTypes from "prop-types";
import { InputLabel, Grid, Stack, OutlinedInput } from "@mui/material";
const FieldForm = (props) => {
  const { data, handleChange } = props;
  let { name, description, type, value, defaultValue, editable } = data;
  debugger;
  
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
                  onChange={(e) => {
                    let newValue = value;
                    newValue[i] = e.target.value;
                    handleChange(newValue, data);
                  }}
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
          onChange={(e) => handleChange(e.target.value, data)}
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
  handleChange: PropTypes.func,
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
