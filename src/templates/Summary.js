const Summary = [
  {
    component: "Layout",
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
          thumbnailData: [
            {
              database: "COLLECTIONS",
              fields: "m_im_access_link",
            },
            {
              database: "DESCRIPTION",
              fields: "a_im_access_link",
            },
          ],

          displayField: [
            {
              database: "COLLECTIONS",
              fields: [
                {
                  name: "LEGAL_TITLE",
                  label: "Title",
                  main: true,
                },

                {
                  name: "EARLY",
                  label: "Dates",
                  gridDisplay: false,
                },
                {
                  name: "ACCESSION_NUMBER",
                  label: "ID",
                },
                {
                  name: "OBJ_DESCRIPTION",
                  label: "Description",
                  gridDisplay: false,
                },
              ],
            },
            {
              database: "DESCRIPTION",
              fields: [
                {
                  name: "TITLE",
                  label: "Title",
                  main: true,
                },

                {
                  name: "DATE_SEARCH",
                  label: "Dates",
                  gridDisplay: false,
                },

                {
                  name: "form_occurrence",
                  label: "Type",
                  gridDisplay: false,
                },

                {
                  name: "REFD",
                  label: "ID",
                },
              ],
            },
          ],
        },
      },
    ],
  },
];

export default Summary;
