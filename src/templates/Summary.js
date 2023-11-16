import {
  COLLECTIONS_SUMMARY_FIELD,
  DESCRIPTION_SUMMARY_FIELD,
  MEDIA_THUMBNAIL_FIELD,
  GENERAL_SEARCHBOX_DBLIST,
} from "./API";

const Summary = [
  {
    component: "Layout",
    children: [
      {
        component: "SummaryLayout",
        data: {
          application: "UNION_VIEW",
          generalSearchBox: {
            application: "UNION_VIEW",
            breadcrumbs: ["Summary"],
            heading: "Search the collections",
            placeholder: "Search By Keyword",
            databaseList: GENERAL_SEARCHBOX_DBLIST,
            helpText: {
              link: "/faq.html",
              description:
                "Didn't find what you're looking for? Check our FAQ page for search tips",
            },
          },
          sortOptions: true,
          filter: [],
          defaultView: "list",
          thumbnailData: MEDIA_THUMBNAIL_FIELD,
          displayField: [
            {
              database: "COLLECTIONS",
              fields: COLLECTIONS_SUMMARY_FIELD,
            },
            {
              database: "DESCRIPTION",
              fields: DESCRIPTION_SUMMARY_FIELD,
            },
          ],
        },
      },
    ],
  },
];

export default Summary;
