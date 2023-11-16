import json from "../templates/json/faq/data.json";

const FAQ = [
  {
    component: "Layout",
    data: {
      active: "FAQ",
    },
    children: [...json],
  },
];

export default FAQ;
