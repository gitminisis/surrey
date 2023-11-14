import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RecordTextField from "../RecordTextField";
import { Typography } from "@mui/material";
import { AUTHORITY_DATABASE_FIELD } from "../../templates/API";
import GeneralDetailTextField from "../DetailLayout/GeneralDetailTextField";
import { getJumpURL, performJumpSearch } from "../../utils/record";
const PopoverRecord = (props) => {
  const { database, field, value, session } = props;
  const [xml, setXML] = useState(null);
  const [loading, isLoaded] = useState(true);
  const displayFields = AUTHORITY_DATABASE_FIELD[database];
  const recordData = xml;
  useEffect(() => {
    performJumpSearch(
      getJumpURL(session, database, field, value, "WEB_PEOPLE_SUM")
    ).then((res) => {
      setXML(res);
      isLoaded(false);
    });
  }, []);

  if (!xml) {
    return (
      <Typography variant="body2" component="p">
        No available data
      </Typography>
    );
  }
  return (
    <div>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <RecordTextField
          xml={xml}
          displayFields={displayFields}
          recordData={recordData}
          displayComponent={GeneralDetailTextField}
        />
      )}
    </div>
  );
};

PopoverRecord.propTypes = {
  session: PropTypes.string,
  database: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PopoverRecord;
