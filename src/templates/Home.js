import homeSimpleSearchBanner from "./json/homeSimpleSearchBanner.json";
import homeJSON from "./json/home/index.json";
import { jsonToTemplate } from "utils/functions";

let data = jsonToTemplate(homeJSON);
const Home = [
  {
    component: "Layout",
    data: {
      active: "Home",
    },
    children: [
      ...data,
      {
        component: "Section",
        data: {
          heading: "Browse by category",
        },
        children: [
          {
            component: "ImageCarousel",
            data: {
              loop: true,
              data: [
                {
                  thumbnail: "/assets/images/Photos.png",
                  title: "Photographs",
                  link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&DATABASE=DESCRIPTION&REPORT=WEB_UNION_SUM_DESC&EXP=(A_IM_OPAC Yes and FORM "Graphic material")',
                },
                {
                  thumbnail: "/assets/images/Maps.png",
                  title: "Maps",
                  link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_OPAC Yes and FORM "Cartographic material"',
                },
                {
                  thumbnail: "/assets/images/Audio-Visual.png",
                  title: "Audio/Video",
                  link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=FORM "Sound recording" or FORM "Moving images" ',
                },
                {
                  thumbnail: "/assets/images/Artifacts.png",
                  title: "Artifacts",
                  link: "?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=COLLECTIONS&language=144&REPORT=WEB_UNION_SUM_COL&EXP=(M_IM_OPAC Yes)",
                },
                {
                  thumbnail: "/assets/images/Textual Records.png",
                  title: "Textual Records",
                  link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=FORM "Textual record"',
                },
              ],
            },
          },
        ],
      },
      {
        component: "Section",
        data: {
          heading: "Browse by area",
        },
        children: [
          {
            component: "Map",
          },
        ],
      },

      {
        component: "Section",
        data: {
          heading: "Recent Additions",
          description:
            "Recent additions from the Archives and Artifact Collections",
        },
        children: [
          {
            component: "ImageMasonry",
            data: {},
          },
        ],
      },
    ],
  },
];
export default Home;
