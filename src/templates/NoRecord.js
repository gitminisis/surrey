const NoRecord = [
  {
    component: "Layout",
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",

          heading: "No results have been found",
          description: "Sorry, we couldn't find any records for your search",
          bannerCarousel: [
            "/assets/images/Union%20Background%201.png",
            "/assets/images/Union%20Background%202.png",
            "/assets/images/Union%20Background%203.png",
            "/assets/images/Union%20Background%204.png",
            "/assets/images/Union%20Background%205.png",
            "/assets/images/Union%20Background%206.png",
            "/assets/images/Union%20Background%207.png",
          ],
        },
      },
    ],
  },
];
export default NoRecord;
