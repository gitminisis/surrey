import {
  DESCRIPTION_GENERAL_DETAIL_FIELD,
  COLLECTIONS_GENERAL_DETAIL_FIELD,
  DESCRIPTION_OVERVIEW_DETAIL_FIELD,
  COLLECTIONS_OVERVIEW_DETAIL_FIELD,
  COLLECTIONS_CHENHALL_DETAIL_FIELD,
  GENERAL_SEARCHBOX_DBLIST,
} from "./DisplayFields";

const Detail = [
  {
    component: "Layout",
    children: [
      {
        component: "DetailLayout",
        data: {
          generalSearchBox: {
            breadcrumbs: ["Summary", "Detail"],
            heading: "Search the collections",
            databaseList: GENERAL_SEARCHBOX_DBLIST,
            helpText: {
              link: "/faq.html",
              description:
                "Didn't find what you're looking for? Check our FAQ page for search tips",
            },
          },
          generalSection: {
            displayFields: [
              {
                database: "COLLECTIONS",
                fields: COLLECTIONS_GENERAL_DETAIL_FIELD,
              },
              {
                database: "DESCRIPTION",
                fields: DESCRIPTION_GENERAL_DETAIL_FIELD,
              },
            ],
            children: [
              {
                component: "DescriptionTree",
                data: {
                  title: "Full Collection List",
                  displayDatabase: ["DESCRIPTION"],
                },
              },
              {
                component: "ContactUsModalForm",
                data: {
                  description:
                    "We're always looking to improve our records. If you have information about a record or think we've made a mistake, contact us.",
                },
              },
            ],
          },
          detailSection: {
            displayFields: [
              {
                database: "COLLECTIONS",
                section: [
                  {
                    title: "Overview",
                    fields: COLLECTIONS_OVERVIEW_DETAIL_FIELD,
                  },
                  {
                    title: "Chenhall",
                    fields: COLLECTIONS_CHENHALL_DETAIL_FIELD,
                  },
                ],
              },
              {
                database: "DESCRIPTION",
                section: [
                  {
                    title: "Overview",
                    fields: DESCRIPTION_OVERVIEW_DETAIL_FIELD,
                  },
                ],
              },
            ],
          },
        },
      },
    
    ],
  },
];

export default Detail;
