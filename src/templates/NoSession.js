import pic1 from "../assets/images/Union Background 1.png";
import pic2 from "../assets/images/Union Background 2.png";
import pic3 from "../assets/images/Union Background 3.png";
import pic4 from "../assets/images/Union Background 4.png";
import pic5 from "../assets/images/Union Background 5.png";
import pic6 from "../assets/images/Union Background 6.png";
import pic7 from "../assets/images/Union Background 7.png";
const NoSession = [{
    component: "Layout",
    children: [{
            component: "SimpleSearchBanner",
            data: {
                searchURL: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
                bannerURL: pic1,
                heading: "City of Surrey Online Heritage Search",
                description: "Over 100,000 pieces of Surrey's history are at your fingertips. Search for specific items below, or browse by category, neighborhood, or new content.",
                bannerCarousel: [pic1, pic2, pic3, pic4, pic5, pic6, pic7],
            },
        },

        {
            component: "Section",
            data: {
                heading: "No active session",
                description: "Please start a new search",
                btnURL: "/",
                btnTitle: "Go back to homepage",
            },
            children: [],
        },
    ],
}, ];
export default NoSession;