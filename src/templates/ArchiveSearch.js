import json from "./json/description-home/data.json";
const ArchivesSearch = [
  {
    component: "Layout",
    data: {
      active: "Archives",
    },
    children: [...json],
  },
];

export default ArchivesSearch;
