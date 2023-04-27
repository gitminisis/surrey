import json from "../templates/json/faq/index.json";
import {
    jsonToTemplate
} from "utils/functions";
let data = jsonToTemplate(json);
console.log(data)
const FAQ = [{
    component: "Layout",
    data: {
        active: "FAQ",
    },
    children: [
        ...data
    ],
}];

export default FAQ;