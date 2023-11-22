const Home = [
  {
    component: "Layout",
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
          heading: "Page Not Found",
          description: "The page you are looking for does not exist",
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
export default Home;
