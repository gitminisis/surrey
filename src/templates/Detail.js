const Detail = [
  {
    component: "Layout",
    children: [
      {
        component: "DetailLayout",
        data: {
          generalSection: {
            displayFields: [
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
                    label: "Accession Number",
                  },

                  {
                    name: "EARLY",
                    label: "Dates",
                  },
                  {
                    name: "OBJECT_NAME",
                    label: "Object Name(s)",
                  },
                ],
              },
              {
                database: "DESCRIPTION",
                fields: [
                  {
                    name: "REF_CODE",
                    label: "Reference Code",
                  },
                  {
                    name: "TITLE",
                    label: "Title",
                  },
                  {
                    name: "EARLY",
                    label: "Dates",
                  },
                ],
              },
            ],
          },
          detailSection: {

          },
        },
      },
    ],
  },
];

export default Detail;
