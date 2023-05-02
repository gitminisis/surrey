import json from "./json/artifact-home/index.json";
import { jsonToTemplate } from "utils/functions";
let data = jsonToTemplate(json);
const ArtifactSearch = [
  {
    component: "Layout",
    data: {
      active: "Artifacts",
    },
    children: [...data],
  },
];

export default ArtifactSearch;
