import homeJSON from "./json/home-sample/index.json";
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