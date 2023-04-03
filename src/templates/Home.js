import pic1 from "../assets/images/Union Background 1.png";
import pic2 from "../assets/images/Union Background 2.png";
import pic3 from "../assets/images/Union Background 3.png";
import pic4 from "../assets/images/Union Background 4.png";
import pic5 from "../assets/images/Union Background 5.png";
import pic6 from "../assets/images/Union Background 6.png";
import pic7 from "../assets/images/Union Background 7.png";

import Category1 from "../assets/images/Photos.png";
import Category2 from "../assets/images/Maps.png";
import Category3 from "../assets/images/Audio-Visual.png";
import Category4 from "../assets/images/Artifacts.png";
import Category5 from "../assets/images/Textual Records.png";

const Home = [
  {
    component: "Layout",
    data: {
      active: "Home",
    },
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
          bannerURL: pic1,
          heading: "City of Surrey Online Heritage Search",
          description:
            "More than 100,000 archival photos, maps, documents, and oral histories, as well as over 5,000 artifacts are at your fingertips. Browse the categories, neighbourhoods, or new additions below, or search for specific records using the keyword search.",
        },
      },

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
                  thumbnail: Category1,
                  title: "Photographs",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_ACCESS present and FORM "Graphic material"',
                },
                {
                  thumbnail: Category2,
                  title: "Maps",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_ACCESS present and FORM "Cartographic material"',
                },
                {
                  thumbnail: Category3,
                  title: "Audio/Video",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=(A_AD_ACCESS present or A_VD_ACCESS present) and FORM "Cartographic material"',
                },
                {
                  thumbnail: Category4,
                  title: "Artifacts",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM&EXP=(A_IM_ACCESS present and FORM "Object") or (M_IM_ACCESS present)',
                },
                {
                  thumbnail: Category5,
                  title: "Textual Records",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_ACCESS present and FORM "Textual record"',
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
