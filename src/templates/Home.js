import homeSimpleSearchBanner from "./json/homeSimpleSearchBanner.json";

const Home = [{
    component: "Layout",
    data: {
        active: "Home",
    },
    children: [{
            component: "SimpleSearchBanner",
            data: {
                ...homeSimpleSearchBanner,
                searchURL: "/scripts/mwimain.dll?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",

                bannerCarousel: [
                    "/assets/images/Union Background 1.png",
                    "/assets/images/Union Background 2.png",
                    "/assets/images/Union Background 3.png",
                    "/assets/images/Union Background 4.png",
                    "/assets/images/Union Background 5.png",
                    "/assets/images/Union Background 6.png",
                    "/assets/images/Union Background 7.png",
                ],
            },
        },

        {
            component: "Section",
            data: {
                heading: "Browse by category",
            },
            children: [{
                component: "ImageCarousel",
                data: {
                    loop: true,
                    data: [{
                            thumbnail: "/assets/images/Photos.png",
                            title: "Photographs",
                            link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_OPAC Yes and FORM "Graphic material"',

                        },
                        {
                            thumbnail: "/assets/images/Maps.png",
                            title: "Maps",
                            link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_IM_OPAC Yes and FORM "Cartographic material"',
                        },
                        {
                            thumbnail: "/assets/images/Audio-Visual.png",
                            title: "Audio/Video",
                            link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=(A_AD_OPAC Yes or A_VD_OPAC Yes) and FORM "Cartographic material"',
                        },
                        {
                            thumbnail: "/assets/images/Artifacts.png",
                            title: "Artifacts",
                            link: "?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=COLLECTIONS&language=144&REPORT=WEB_UNION_SUM_COL&EXP=(M_IM_OPAC Yes)",
                        },
                        {
                            thumbnail: "/assets/images/Textual Records.png",
                            title: "Textual Records",
                            link: '?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=A_TX_OPAC Yes and FORM "Textual record"',
                        },
                    ],
                },
            }, ],
        },
        {
            component: "Section",
            data: {
                heading: "Browse by area",
            },
            children: [{
                component: "Map",
            }, ],
        },

        {
            component: "Section",
            data: {
                heading: "Recent Additions",
                description: "Recent additions from the Archives and Artifact Collections",
            },
            children: [{
                component: "ImageMasonry",
                data: {},
            }, ],
        },
    ],
}, ];
export default Home;