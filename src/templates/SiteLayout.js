import siteLayout from "./json/site-layout/data.json";
const SiteLayout = {
  ...siteLayout[0],
  baseURL: "/",
  virtualIncludePaths: "SURREY_OPAC",
  imageVirtualPath: "/SAMOA_IMAGES/",
  imageVirtualDir: "[SAMOA_IMAGES]",
  application: "UNION_VIEW",
};

export default SiteLayout;
