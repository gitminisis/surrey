import {
  DESCRIPTION_SUMMARY_FIELD,
  MEDIA_THUMBNAIL_FIELD,
} from "./DisplayFields";

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
          generalSearchBox: {
            breadcrumbs: ["Summary"],
            heading: "Search the collections",
            helpText: {
              link: "/faq.html",
              description:
                "Didn't find what you're looking for? Check our FAQ page for search tips",
            },
          },
          filter: [
            {
              item_group: [
                {
                  item_value: "Image",
                  item_frequency: 11,
                  item_link:
                    "https://FORDHERITAGEVAULT.COM/SCRIPTS10/MWIMAIN.DLL/1015209066?SEARCH&amp;EXP=KEYWORD_CLUSTER~20~1Dtest~1D~20*~20(A_\nMEDIA_TYPE~20~22Image~22)",
                  item_selected: "N",
                },
                {
                  item_value: "Textual",
                  item_frequency: 1054,
                  item_link:
                    "https://FORDHERITAGEVAULT.COM/SCRIPTS10/MWIMAIN.DLL/1015209066?SEARCH&amp;EXP=KEYWORD_CLUSTER~20~1Dtest~1D~20*~20(A_\nMEDIA_TYPE~20~22Textual~22)",
                  item_selected: "N",
                },
              ],
            },
          ],
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
