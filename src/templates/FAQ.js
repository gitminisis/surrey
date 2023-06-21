import json from "../templates/json/faq.json";

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
