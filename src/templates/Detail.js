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
            displayFields: [
              {
                database: "COLLECTIONS",
                fields: [
                  {
                    name: "ACCESSION_NUMBER",
                    label: "Accession Number",
                  },
                  {
                    name: "EARLY",
                    label: "Dates",
                  },
                  {
                    name: "OBJ_DESCRIPTION",
                    label: "Description",
                  },
                  {
                    name: "SUB_CLASS",
                    label: "Sub-Classification",
                  },
                  {
                    name: "PRIMARY",
                    label: "Primary",
                  },
                  {
                    name: "MATERIAL",
                    label: "Material(s)",
                  },
                  {
                    name: "ASSOC_FULLNAME",
                    label: "Associated Person",
                  },
                  {
                    name: "ORG_ASSOC",
                    label: "Associated Organization",
                  },
                  {
                    name: "ASSOC_EVENT",
                    label: "Associated Event",
                  },
                  {
                    name: "PLACE_ASSOC_NAME",
                    label: "Associated Place",
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
        },
      },
    ],
  },
];

export default Detail;
