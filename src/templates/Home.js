// import homeJSON from "./json/home/index.json";
import { jsonToTemplate } from "utils/functions";
import homeJSON from "./json/union-home.json";
// let data = jsonToTemplate(homeJSON);
const Home = [{
    component: "Layout",
    data: {
        active: "Home",
    },
    children: [
        ...homeJSON,
    ],
}, ];
export default Home;