import React from "react";
import HomeTemplate from "../../templates/Home";
import Component from "../../components/Component";
import { PropTypes } from "prop-types";
const Home = (props) => {

  const { template } = props;
  return <> {template.map((config) => Component(config))}</>;
};

Home.propTypes = {
  template: PropTypes.array,
};

export default Home;
