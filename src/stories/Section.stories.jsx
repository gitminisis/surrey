import React from "react";
import Section from "../components/Section";

export default {
  title: "UI Components/Section",
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const Example = Template.bind({});

Example.args = {
  heading: "Lorem Ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Lacus viverra vitae congue eu consequat ac felis.",
  url: "/",
  urlTitle: "View More",
};

export const ExampleWithButton = Template.bind({});

ExampleWithButton.args = {
  heading: "Lorem Ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Lacus viverra vitae congue eu consequat ac felis.",
  url: "/",
  urlTitle: "View More",
  btnURL:"/",
  btnTitle:"Explore"
};
