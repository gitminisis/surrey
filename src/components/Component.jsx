import React, { useId } from "react";
import {
  AdvancedSearchBanner,
  DescriptionCard,
  ImageCarousel,
  ImageMasonry,
  Map,
  Section,
  SimpleSearchBanner,
  TagCard,
  MediaCard,
  Layout,
  MultiTabs,
  ChipStack,
  DescriptionBox,
  Accordion,
  SummaryLayout,
} from "./index";

const KeysToComponentMap = {
  AdvancedSearchBanner,
  DescriptionCard,
  ImageCarousel,
  ImageMasonry,
  Map,
  Section,
  SimpleSearchBanner,
  TagCard,
  MediaCard,
  Layout,
  MultiTabs,
  ChipStack,
  DescriptionBox,
  Accordion,
  SummaryLayout,
};

function Component(block) {
  if (typeof KeysToComponentMap[block.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[block.component],
      { ...block.data },
      block.children &&
        (typeof block.children === "string"
          ? block.children
          : block.children.map((b) => Component(b)))
    );
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._id }
  );
}
export default Component;
