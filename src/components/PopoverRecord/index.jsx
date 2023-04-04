import React from "react";
import PropTypes from "prop-types";

const PopoverRecord = (props) => {
    const {database, searchExpression, session} = props;
  return <div>PopoverRecord</div>;
};

PopoverRecord.propTypes = {
    database: PropTypes.string.isRequired,
    searchExpression: PropTypes.string.isRequired,
};

export default PopoverRecord;
