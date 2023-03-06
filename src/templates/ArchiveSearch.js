import pic1 from "../assets/images/Archives_Main.png";
const ArchivesSearch = [
  {
    component: "Layout",
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC",
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
                  thumbnail: "https://picsum.photos/400",
                  title: "Library",
                },
                {
                  thumbnail: "https://picsum.photos/450",
                  title: "Books",
                },
                {
                  thumbnail: "https://picsum.photos/500",
                  title: "Library",
                },
                {
                  thumbnail: "https://picsum.photos/550",
                  title: "Library",
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
