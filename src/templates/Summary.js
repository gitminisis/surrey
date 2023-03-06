const Summary = [
  {
    component: "Layout",
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
                  name: "ACCESSION_NUMBER",
                  label: "ID",
                },

                {
                  name: "EARLY",
                  label: "Dates",
                  gridDisplay: false,
                },
                {
                  name: "OBJECT_NAME",
                  label: "Object Name(s)",
                  gridDisplay: false,
                },
                {
                  name: "MATERIAL",
                  label: "Material(s)",
                  gridDisplay: false,
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
                  name: "gmd_occurrence",
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
