import {
    DESCRIPTION_SUMMARY_FIELD,
    GENERAL_SEARCHBOX_DBLIST,
    MEDIA_THUMBNAIL_FIELD,
} from "./API";

const Summmary = [{
    component: "Layout",
    data: {
        active: "Archives",
    },
    children: [{
        component: "SummaryLayout",
        data: {
            application: "DESCRIPTION",
            generalSearchBox: {
                breadcrumbs: ["Summary"],
                heading: "Search the collections",
                placeholder: "Search By Keyword",
                databaseList: [{
                    "database": "Archives",
                    "searchURL": "?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC"
                }],
                helpText: {
                    link: "/faq.html",
                    description: "Didn't find what you're looking for? Check our FAQ page for search tips",
                },
            },
            sortOptions: true,
            filter: [],
            thumbnailData: MEDIA_THUMBNAIL_FIELD,
            displayField: [{
                database: "DESCRIPTION",
                fields: DESCRIPTION_SUMMARY_FIELD,
            }, ],
            defaultView: "list",
        },
    }, ],
}, ];

export default Summmary;