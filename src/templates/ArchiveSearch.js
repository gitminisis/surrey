const ArchivesSearch = [
  {
    component: "Layout",
    data: {
      active: "Archives",
    },
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          application: "DESCRIPTION",
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC",
          bannerCarousel: ["/assets/images/Archives_Main.png"],
          heading: "Search the Archives",
          description:
            " Surrey Archives is home to Surrey's history. Original photos, maps, manuscripts, city and community records and an extensive reference collection are waiting for you. Search for and view over 100,000 photos on Surrey Online Heritage Search.",

          collapseSearchFilter: {
            data: {
              database: "DESCRIPTION",
              description: "More search options",

              data: [
                {
                  title: "Reference Code",
                  field: "REFD",
                },

                {
                  title: "Title",
                  field: "TITLE",
                },
                {
                  title: "Type",
                  field: "FORM",
                },
                {
                  title: "Scope",
                  field: "SCOPE",
                },
                {
                  title: "Creator",
                  field: "SCOPE",
                },
                {
                  title: "Search Dates",
                  field: "DATE_SEARCH",
                },
                {
                  title: "Town Centre",
                  field: "INDEXGEO",
                },
                {
                  title: "Subject",
                  field: "SUBJECT",
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
          {
            component: "ImageCarousel",
            data: {
              data: [
                {
                  thumbnail:
                    "/assets/images/Surrey Leader Photograph Collection.png",
                  title: "The Surrey Leader Photograph Fonds",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD F62",
                },
                {
                  thumbnail:
                    "/assets/images/Columbian Newspaper Collection.png",
                  title: "The Columbian Newspaper Collection",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD F98",
                },
                {
                  thumbnail:
                    "/assets/images/Community Planning Photographs.png",
                  title: "Community Planning Photographs",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD COS.PL 9",
                },
                {
                  thumbnail:
                    "/assets/images/Surrey 2000 Captured Time Collection.png",
                  title: "Surrey 2000, Captured Time Collection",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD F140",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export default ArchivesSearch;
