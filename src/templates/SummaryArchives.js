import {
  DESCRIPTION_SUMMARY_FIELD,
  GENERAL_SEARCHBOX_DBLIST,
  MEDIA_THUMBNAIL_FIELD,
} from "./API";

const Summmary = [
  {
    component: "Layout",
    data: {
      active: "Archives",
    },
    children: [
      {
        component: "SummaryLayout",
        data: {
          application: "DESCRIPTION",
          generalSearchBox: {
            application: "DESCRIPTION",
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
          thumbnailData: MEDIA_THUMBNAIL_FIELD,
          displayField: [
            {
              database: "DESCRIPTION",
              fields: DESCRIPTION_SUMMARY_FIELD,
            },
          ],
          defaultView: "list",
        },
      },
    ],
  },
];

export default Summmary;
