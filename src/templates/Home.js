const Home = [
  {
    component: "Layout",
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
          bannerURL:
            "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-10/fall-trees-in-surrey.jpg?h=56d0ca2e&itok=YzKjACHG",
          heading: "Surrey Online Heritage Search",
          description:
            "More than 100,000 archival photos, maps, documents and oral histories, as well as over 5,000 artifacts are at your fingertips. Browse the categories, neighbourhoods, or new additions below, or search for specific records using the keyword search.",
          bannerCarousel: [
            "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-10/fall-trees-in-surrey.jpg?h=56d0ca2e&itok=YzKjACHG",
            "https://www.surrey.ca/sites/default/files/styles/21x9_1100w/public/2023-01/whalley-aerial.jpg?h=7c4e7980&itok=w8lHERMH",
            "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2020-08/COSMOS.PNG?h=2f89500c&itok=7TuiVftj",
            "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-12/two-people-report-a-problem-laptop.png?h=735bdc0a&itok=S3KTW-GJ",
          ],
        },
      },

      {
        component: "Section",
        data: {
          heading: "Browse by category",
        },
        children: [
          {
            component: "ImageCarousel",
            data: {
              data: [
                {
                  thumbnail: "https://picsum.photos/400",
                  title: "Photos",
                },
                {
                  thumbnail: "https://picsum.photos/450",
                  title: "Maps",
                },
                {
                  thumbnail: "https://picsum.photos/500",
                  title: "Audio/Video",
                },
                {
                  thumbnail: "https://picsum.photos/550",
                  title: "Artifacts",
                },
                {
                  thumbnail: "https://picsum.photos/600",
                  title: "Textual Records",
                },
              ],
            },
          },
        ],
      },
      // {
      //     component: "Section",
      //     data: {
      //         heading: "SURREY ARTIFACT COLLECTIONS",
      //         description: "The Artifact Collection feature archaeology, ethnology, and human history materials that reflect the history of Surrey.",
      //         btnURL: '/artifact',
      //         btnTitle: "Explore"
      //     },
      //     children: [{
      //             component: "TagCard",
      //             data: {
      //                 "tag": "Item",
      //                 "title": "Nunc consequat interdum varius",
      //                 "description": "John Doe",
      //                 "thumbnail": "https://picsum.photos/510"
      //             }
      //         },

      //         {
      //             component: "TagCard",
      //             data: {
      //                 "tag": "Document",
      //                 "title": "Aliquam malesuada bibendum arcu",
      //                 "description": "Jane Doe",
      //                 "thumbnail": "https://picsum.photos/520"
      //             },
      //         },

      //     ]
      // },
      {
        component: "Section",
        data: {
          heading: "Browse by area",
        },
        children: [
          {
            component: "Map",
          },
        ],
      },

      {
        component: "Section",
        data: {
          heading: "Recent Additions",
          description:
            "Recent additions from the Archives and Artifact Collections",
        },
        children: [
          {
            component: "ImageMasonry",
            data: {
              data: [
                {
                  thumbnail: "https://picsum.photos/400/300",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/410/400",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/430/500",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/440/600",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/450/700",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/460/800",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/470/900",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/480/350",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
                {
                  thumbnail: "https://picsum.photos/490/450",
                  title: "Library",
                  url: "/",
                  urlTitle: "View More",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];
export default Home;
