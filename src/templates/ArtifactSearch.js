const ArtifactSearch = [
  {
    component: "Layout",
    children: [
      {
        component: "AdvancedSearchBanner",
        data: {
          bannerURL:
            "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-05/The%202022%20Re-enactors.jpg?h=120c397f&itok=S0uTZH8E",
          heading: "Search the Artifacts",
          description:
            "The Heritage Artifact Collection is made up of material culture that holds social and cultural significance to Surrey's diverse communities. Examples include clothing, tools, and memorabilia.",

          collapseSearchFilter: {
            data: {
              description: "More search options",
              data: [
                {
                  title: "Field 1",
                  field: "",
                  data: [
                    { label: "Test 1", value: "123" },
                    { label: "Test 2", value: "123" },
                  ],
                },

                {
                  title: "Field 2",
                  field: "",
                  data: [
                    { label: "Test 1", value: "123" },
                    { label: "Test 2", value: "123" },
                  ],
                },
                {
                  title: "Field 3",
                  field: "",
                  data: [
                    { label: "Test 1", value: "123" },
                    { label: "Test 2", value: "123" },
                  ],
                },
                {
                  title: "Field 4",
                  field: "",
                  data: [{ label: "Test 1", value: "123" }],
                },
              ],
            },
          },
        },
      },
      {
        component: "Section",
        data: {
          heading: "Featured Collections",
        },
        children: [
          { component: "PhotoCoverCard" },
          { component: "PhotoCoverCard" },
          { component: "PhotoCoverCard" },
          { component: "PhotoCoverCard" },
        ],
      },
      {
        component: "Section",
        data: {
          heading: "Related Link",
        },
        children: [
          {
            component: "MediaCard",
            data: {
              thumbnail:
                "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2020-12/The%20bridge%20under%20construction.jpg?h=07298254&itok=1Bq9MemN",
              title: "",
              description: "Collection Overview",
            },
          },
          {
            component: "MediaCard",
            data: {
              thumbnail:
                "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2021-04/Flamingo%20Hotel%20and%20surround%20businesses.jpg?h=8e51b07f&itok=wVSDxN8d",
              title: "",
              description: "Public Programs & Outreach",
            },
          },
          {
            component: "MediaCard",
            data: {
              thumbnail:
                "https://www.surrey.ca/sites/default/files/styles/3x2_1200w/public/2020-12/The%20Surrey%20Archives.jpg?h=10d202d3&itok=lVcLULzv",
              title: "",
              description: "Surrey Archives",
            },
          },
          {
            component: "MediaCard",
            data: {
              thumbnail:
                "https://www.surrey.ca/sites/default/files/styles/large/public/2022-10/Surrey%20Archives%201941.JPG?itok=KxaEA-BJ",
              title: "",
              description: "Japanese Canadian History",
            },
          },
        ],
      },
    ],
  },
];

export default ArtifactSearch;
