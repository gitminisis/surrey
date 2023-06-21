import json from "templates/json/description-home.json";
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
