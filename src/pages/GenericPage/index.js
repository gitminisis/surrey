import React from "react";
import Component from "../../components/Component";
import { PropTypes } from "prop-types";
const GenericPage = (props) => {
  const { template } = props;
  return <> {template.map((config) => Component(config))}</>;
};

GenericPage.propTypes = {
  template: PropTypes.array,
};

export default GenericPage;
