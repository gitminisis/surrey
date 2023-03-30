import React from "react";
import DescriptionCard from "../components/DescriptionCard";

export default {
  title: "UI Components/DescriptionCard",
  component: DescriptionCard,
};

const Template = (args) => <DescriptionCard {...args} />;

export const Example1 = Template.bind({});
export const Example2 = Template.bind({});

Example1.args = {
  position: 0,
  thumbnail: "https://picsum.photos/1400",
  title: "pellentesque adipiscing",
  heading: "Est ultricies integer quis auctor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Massa sapien faucibus et molestie ac feugiat sed. Eget dolor morbi non arcu. Congue mauris rhoncus aenean vel elit.",
  url: "/",
  urlTitle: "View More",
};

Example2.args = {
  position: 1,
  thumbnail: "https://picsum.photos/1200",
  title: "pellentesque adipiscing",
  heading: "Est ultricies integer quis auctor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Massa sapien faucibus et molestie ac feugiat sed. Eget dolor morbi non arcu. Congue mauris rhoncus aenean vel elit.",
  url: "/",
  urlTitle: "View More",
};
