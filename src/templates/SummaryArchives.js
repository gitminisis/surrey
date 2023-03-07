const Summary = [
  {
    component: "Layout",
    data: {
      active: "Archives",
    },
    children: [
      {
        component: "SummaryLayout",
        data: {
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
              database: "DESCRIPTION",
              fields: "a_im_access_link",
            },
          ],
          displayField: [
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
                  label: "Date(s)",
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
          defaultView: "list",
        },
      },
    ],
  },
];

export default Summary;
