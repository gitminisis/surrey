import React from "react";
import PropTypes from "prop-types";

const FieldForm = (props) => {
  return <div>FieldForm</div>;
};

FieldForm.propTypes = {
  handleChange: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    editable: PropTypes.bool,
  }),
};

export default FieldForm;
