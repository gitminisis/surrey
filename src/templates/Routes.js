import { lazy } from "react";
import { Navigate } from "react-router-dom";

import HomeTemplate from "./Home";
import ArchivesSearchTemplate from "./ArchiveSearch";
import ArtifactSearchTemplate from "./ArtifactSearch";
import NotFoundPageTemplate from "./404";
import FAQ from "./FAQ";
import Summary from "./Summary";
import Detail from "./Detail";
const GenericPage = lazy(() => import("../pages/GenericPage"));

// const Routes = [
//     { path: "/", template: HomeTemplate },
//     { path: "/archives", template: ArchivesSearchTemplate },
//     { path: "/artifact", template: ArtifactSearchTemplate },
//     { path: '/FAQ', template: FAQ },
//     { path: '/summary', template: Summary },
//     { path: "*", template: NotFoundPageTemplate },

// ];

const Routes = [
  { path: "", template: HomeTemplate },
  { path: "archives", template: ArchivesSearchTemplate },
  { path: "artifact", template: ArtifactSearchTemplate },
  { path: "FAQ", template: FAQ },
  { path: "summary", template: Summary },
  { path: "detail", template: Detail },
  { path: "*", template: NotFoundPageTemplate },
];

export default Routes;
