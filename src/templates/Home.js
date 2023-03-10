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

import { getRecendAdditions } from "../utils/record";
// getRecendAdditions();
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
            "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
          bannerURL: pic1,
          heading: "Surrey Online Heritage Search",
          description:
            "Over 100,000 pieces of Surrey's history are at your fingertips. Search for specific items below, or browse by category, neighborhood, or new content.",
          bannerCarousel: [pic1, pic2, pic3, pic4, pic5, pic6, pic7],
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
              data: [
                {
                  thumbnail: Category1,
                  title: "Photographs",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_ACCESS present and FORM "Graphic material"',
                },
                {
                  thumbnail: Category2,
                  title: "Maps",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_ACCESS present and FORM "Cartographic material"',
                },
                {
                  thumbnail: Category3,
                  title: "Audio/Video",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=(A_AD_ACCESS present or A_VD_ACCESS present) and FORM "Cartographic material"',
                },
                {
                  thumbnail: Category4,
                  title: "Artifacts",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM&EXP=(A_IM_ACCESS present and FORM "Object") or (M_IM_ACCESS present)',
                },
                {
                  thumbnail: Category5,
                  title: "Textual Records",
                  link: '/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_ACCESS present and FORM "Textual record"',
                },
              ],
            },
          },
        ],
      },
      // {
      //     component: "Section",
      //     data: {
      //         heading: "SURREY ARTIFACT COLLECTIONS",
      //         description: "The Artifact Collection feature archaeology, ethnology, and human history materials that reflect the history of Surrey.",
      //         btnURL: '/artifact',
      //         btnTitle: "Explore"
      //     },
      //     children: [{
      //             component: "TagCard",
      //             data: {
      //                 "tag": "Item",
      //                 "title": "Nunc consequat interdum varius",
      //                 "description": "John Doe",
      //                 "thumbnail": "https://picsum.photos/510"
      //             }
      //         },

      //         {
      //             component: "TagCard",
      //             data: {
      //                 "tag": "Document",
      //                 "title": "Aliquam malesuada bibendum arcu",
      //                 "description": "Jane Doe",
      //                 "thumbnail": "https://picsum.photos/520"
      //             },
      //         },

      //     ]
      // },
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
            data: {
              data: [
                {
                  thumbnail: "https://picsum.photos/400/300",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/410/400",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/430/500",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/440/600",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/450/700",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/460/800",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/470/900",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/480/350",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/490/450",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];
export default Home;
