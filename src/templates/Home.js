// import homeJSON from "./json/home/index.json";
import homeJSON from "./json/union-hom/data.json";
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