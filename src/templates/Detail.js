const Detail = [
  {
    component: "Layout",
    children: [
      {
        component: "DetailLayout",
        data: {
          generalSearchBox: {
            searchURL: "",
            breadcrumbs: ["Summary", "Detail"],
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
                    label: "Date(s)",
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
          detailSection: {
            displayFields: [
              {
                database: "COLLECTIONS",
                section: [
                  {
                    title: "Overview",
                    fields: [
                      {
                        name: "OBJ_DESCRIPTION",
                        label: "Description",
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
                    title: "Chenhall",
                    fields: [
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
                ],
              },
              {
                database: "DESCRIPTION",
                section: [
                  {
                    title: "Overview",
                    fields: [
                      {
                        name: "form_occurrence",
                        label: "Type of Materials",
                      },
                      {
                        name: "LEVEL_DESC",
                        label: "Level of Description",
                      },
                      {
                        name: "physical_desc_occurrence",
                        label: "Physical Description",
                      },
                      {
                        name: "DATE_SEARCH",
                        label: "Dates",
                      },
                      {
                        name: "SUBJECT",
                        label: "Subject(s)",
                      },
                      {
                        name: "SITE_NAME",
                        label: "Area/Neighbourhood",
                      },
                      {
                        name: "D_RESTRICTION",
                        label: "Restrictions",
                      },
                    ],
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
