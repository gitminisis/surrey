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
              database: "COLLECTIONS",
              fields: "m_im_access_link",
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
              ],
            },
          ],
          defaultView: "grid",
        },
      },
    ],
  },
];

export default Summary;
