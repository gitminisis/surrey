import pic1 from "../assets/images/Artifacts Main Background.png";
const ArtifactSearch = [{
    component: "Layout",
    data: {
        active: "Artifact",
    },
    children: [{
            component: "SimpleSearchBanner",
            data: {
                searchURL: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=COLLECTIONS&language=144&REPORT=WEB_UNION_SUM_COL",
                bannerCarousel: [pic1],
                heading: "Search the Artifacts",
                description: "The Heritage Artifact Collection is made up of material culture that holds social and cultural significance to Surrey's diverse communities. Examples include clothing, tools, and memorabilia.",
            },
        },
        {
            component: "Section",
            data: {
                heading: "Featured Collections",
            },
            children: [{
                component: "PhotoCoverCard",
                data: {
                    recordIds: ["OEXID12", "OEXID13", "OEXID14", "OEXID15"],
                },
            }, ],
        },
        {
            component: "Section",
            data: {
                heading: "Artifacts on Display",
            },
            children: [{
                    component: "MediaCard",
                    data: {
                        thumbnail: "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2020-12/The%20bridge%20under%20construction.jpg?h=07298254&itok=1Bq9MemN",
                        title: "",
                        description: "Collection Overview",
                    },
                },
                {
                    component: "MediaCard",
                    data: {
                        thumbnail: "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2021-04/Flamingo%20Hotel%20and%20surround%20businesses.jpg?h=8e51b07f&itok=wVSDxN8d",
                        title: "",
                        description: "Public Programs & Outreach",
                    },
                },
                {
                    component: "MediaCard",
                    data: {
                        thumbnail: "https://www.surrey.ca/sites/default/files/styles/3x2_1200w/public/2020-12/The%20Surrey%20Archives.jpg?h=10d202d3&itok=lVcLULzv",
                        title: "",
                        description: "Surrey Archives",
                    },
                },
                {
                    component: "MediaCard",
                    data: {
                        thumbnail: "https://www.surrey.ca/sites/default/files/styles/large/public/2022-10/Surrey%20Archives%201941.JPG?itok=KxaEA-BJ",
                        title: "",
                        description: "Japanese Canadian History",
                    },
                },
            ],
        },
    ],
}, ];

export default ArtifactSearch;