import {
    COLLECTIONS_SUMMARY_FIELD,
    DESCRIPTION_SUMMARY_FIELD,
    MEDIA_THUMBNAIL_FIELD,
    DESCRIPTION_GENERAL_DETAIL_FIELD,
    COLLECTIONS_GENERAL_DETAIL_FIELD,
    DESCRIPTION_OVERVIEW_DETAIL_FIELD,
    COLLECTIONS_OVERVIEW_DETAIL_FIELD,
    COLLECTIONS_CHENHALL_DETAIL_FIELD,
    GENERAL_SEARCHBOX_DBLIST,
} from "./API";

const Summary = [{
    component: "Layout",
    children: [{
        component: "SummaryBookmarkLayout",
        data: {
            generalSearchBox: {
                application:"UNION_VIEW",
                breadcrumbs: ["Summary"],
                heading: "Search the collections",
                placeholder: "Search By Keyword",
                databaseList:GENERAL_SEARCHBOX_DBLIST,
                helpText: {
                    link: "/faq.html",
                    description: "Didn't find what you're looking for? Check our FAQ page for search tips",
                },
            },
            displayField: [{
                database: "COLLECTIONS",
                fields: COLLECTIONS_SUMMARY_FIELD,
            },
            {
                database: "DESCRIPTION",
                fields: DESCRIPTION_SUMMARY_FIELD,
            },
            ],
            thumbnailData: MEDIA_THUMBNAIL_FIELD,
            generalSection: {
                displayFields: [{
                    database: "COLLECTIONS",
                    fields: COLLECTIONS_GENERAL_DETAIL_FIELD,
                },
                {
                    database: "DESCRIPTION",
                    fields: DESCRIPTION_GENERAL_DETAIL_FIELD,
                },
                ],
                children: [{
                    component: "DescriptionTree",
                    data: {
                        title: "Full Collection List",
                        displayDatabase: ["DESCRIPTION"],
                    },
                },
                {
                    component: "ContactUsModalForm",
                    data: {
                        displayDatabase: ["DESCRIPTION", "COLLECTIONS"],

                    description: "We’re always looking to improve our records. If you have information about a record or think we’ve made a mistake, contact us. You can also order a copy of the record by clicking the button below.",
                },
                    },
                ],
},
        },
children: [],
    }, ],
}, ];

export default Summary;