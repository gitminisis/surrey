import json from "./json/collections-home.json";

const ArtifactSearch = [
  {
    component: "Layout",
    data: {
      active: "Artifacts",
    },
    children: [...json],
  },
];

export default ArtifactSearch;
