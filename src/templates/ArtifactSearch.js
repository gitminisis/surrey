import json from "./json/collections-home/data.json";

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
