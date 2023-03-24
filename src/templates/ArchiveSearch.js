import pic1 from "../assets/images/Archives_Main.png";
import Featured1 from "../assets/images/Surrey Leader Photograph Collection.png";
import Featured2 from "../assets/images/Columbian Newspaper Collection.png";
import Featured3 from "../assets/images/Community Planning Photographs.png";
import Featured4 from "../assets/images/Surrey 2000 Captured Time Collection.png";

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
          searchURL:
            "/scripts/mwimain.dll?SEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC",
          bannerCarousel: [pic1],
          heading: "Search the Archives",
          description:
            "The Surrey Archives is home to Surrey's history. Original photos, maps, manuscripts, city and community records and an extensive reference collection are waiting for you. Search for and view over 50,000 photos on SAMOA.",

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
                  title: "Format",
                  field: "FORMAT",
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
                  title: "Area/Neighborhood",
                  field: "SITE_NAME",
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
          heading: "Featured Records",
        },
        children: [
          {
            component: "ImageCarousel",
            data: {
              data: [
                {
                  thumbnail: Featured1,
                  title: "The Surrey Leader Photograph Fonds",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD F62",
                },
                {
                  thumbnail: Featured2,
                  title: "The Columbian Newspaper Collection",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD F98",
                },
                {
                  thumbnail: Featured3,
                  title: "Community Planning Photographs",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD COS.PL 9",
                },
                {
                  thumbnail: Featured4,
                  title: "Surrey 2000, Captured Time Collection",
                  link: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC&EXP=REFD F140",
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
