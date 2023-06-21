import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));

// render - sample page
const SamplePage = Loadable(
  lazy(() => import("../pages/extra-pages/SamplePage"))
);

// render - utilities
const Typography = Loadable(
  lazy(() => import("../pages/components-overview/Typography"))
);
const Color = Loadable(
  lazy(() => import("../pages/components-overview/Color"))
);
const Shadow = Loadable(
  lazy(() => import("../pages/components-overview/Shadow"))
);
const AntIcons = Loadable(
  lazy(() => import("../pages/components-overview/AntIcons"))
);

const AdminEditPage = Loadable(lazy(() => import("../pages/admin-edit-page")));
const AdminEditFields = Loadable(
  lazy(() => import("../pages/admin-edit-fields"))
);
const AdminEditSite = Loadable(lazy(() => import("../pages/admin-edit-site")));
const AdminEditUnionHome = Loadable(
  lazy(() => import("../pages/admin-edit-union-home"))
);
const AdminEditCollectionsHome = Loadable(
  lazy(() => import("../pages/admin-edit-collections-home"))
);
const AdminEditDescriptionHome = Loadable(
  lazy(() => import("../pages/admin-edit-description-home"))
);
const AuthLogout = Loadable(
  lazy(() => import("../pages/authentication/Logout"))
);
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },

    {
      path: "fields/:id",
      element: <AdminEditFields />,
    },
    { path: "site-layout", element: <AdminEditSite /> },
    { path: "page/union-home", element: <AdminEditUnionHome /> },
    { path: "page/collections-home", element: <AdminEditCollectionsHome /> },
    { path: "page/description-home", element: <AdminEditDescriptionHome /> },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
    {
      path: "shadow",
      element: <Shadow />,
    },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "icons/ant",
      element: <AntIcons />,
    },
  ],
};

export default MainRoutes;
