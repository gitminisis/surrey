import { SubdirectoryArrowLeft } from "@mui/icons-material";
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
                description: "The Heritage Artifact Collection records the tangible and intangible cultural heritage of Surrey. The mandate of the Collection is to preserve and maintain the material culture of the People, places, and events of Surrey that hold social and/or cultural significance to Surrey's diverse communities.",
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
                data: { recordIds: ["OEXID12", "OEXID13", "OEXID14", "OEXID15"] },
            }, ],
        },
    ],
}, ];

export default ArtifactSearch;