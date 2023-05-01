import homeJSON from "./json/home/index.json";
import { jsonToTemplate } from "utils/functions";

let data = jsonToTemplate(homeJSON);
const Home = [{
    component: "Layout",
    data: {
        active: "Home",
    },
    children: [
        ...data,
    ],
}, ];
export default Home;