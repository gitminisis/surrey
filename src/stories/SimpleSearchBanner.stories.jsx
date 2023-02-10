import React from "react";
import SimpleSearchBanner from "../components/SimpleSearchBanner";

export default {
  title: "UI Components/SimpleSearchBanner",
  component: SimpleSearchBanner,
};

const Template = (args) => <SimpleSearchBanner {...args} />;

export const Example = Template.bind({});

Example.args = {
    bannerURL: "https://picsum.photos/2500",
    heading: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum."
};
