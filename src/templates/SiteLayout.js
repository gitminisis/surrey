import siteLayout from "./json/site-layout.json";
const SiteLayout = {
  ...siteLayout,
  baseURL: "/",
  virtualIncludePaths: "SURREY_OPAC",
  imageVirtualPath: "/SAMOA_IMAGES/",
  imageVirtualDir: "[SAMOA_IMAGES]",
  application: "UNION_VIEW",

  links: [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/archives.html",
      title: "Archives",
    },
    {
      url: "/artifacts.html",
      title: "Artifacts",
    },
    {
      url: "/faq.html",
      title: "FAQ",
    },
  ],
};

export default SiteLayout;
