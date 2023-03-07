const Detail = [
  {
    component: "Layout",
    children: [
      {
        component: "DetailLayout",
        data: {
          generalSearchBox: {
            breadcrumbs: ["Summary","Detail"],
            heading: "Search the collections",
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
                    name: "COLLECTION",
                    label: "Collection",
                  },
                  {
                    name: "EARLY",
                    label: "Dates",
                  },
                  {
                    name: "OBJECT_NAME",
                    label: "Object Name(s)",
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
                    name: "SITE_NAME",
                    label: "Associated Place",
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
