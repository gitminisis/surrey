import React from "react";
import PropTypes from "prop-types";
import ReactShowMoreText from "react-show-more-text";
import { deepSearch } from "../../utils/functions";
import { flattenDeep } from "lodash";
import { Typography } from "@mui/material";
const ShowMoreText = (props) => {
  const { record, name, label, showLabel } = props;
  let text = deepSearch(record, name.toLowerCase());
  let flattenText = flattenDeep(text);

  return (
    <>
      <Typography
        variant="subtitle1"
        className="showMoreTextField"
        color="text.primary"
      >
        {showLabel ? <strong>{label}:</strong> : null}
        {flattenText.map((item, i) => (
          <ReactShowMoreText
            style={{ display: "inline" }}
            key={i}
            lines={1}
            more="Show more"
            less={
              <Typography variant="body2" color="primary.dark">
                Show less
              </Typography>
            }
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            {item}
          </ReactShowMoreText>
        ))}
      </Typography>
    </>
  );
};

ShowMoreText.propTypes = {
  record: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool.isRequired,
};

export default ShowMoreText;
