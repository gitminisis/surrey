import React from "react";
import PropTypes from "prop-types";
import Component from "../Component";
import { deepSearch } from "../../utils/functions";
const index = (props) => {
  const { displayFields, recordData, recordLink, gridDisplay } = props;
  let DisplayComponent = props.displayComponent;

  return displayFields.map((field) => {
    if (gridDisplay && field.gridDisplay === false) {
      return;
    }
    let fieldValue = deepSearch(recordData, field.name.toLowerCase());
    if (fieldValue.length === 0) {
      return;
    }
    let fieldLabel = field.label;

    if (field.component !== undefined) {
      return Component(field);
    }

    return (
      <DisplayComponent
        recordLink={recordLink}
        main={field.main}
        label={fieldLabel}
        value={fieldValue}
        maxLength={field.maxLength}
      />
    );
  });
};

index.propTypes = {};

export default index;
