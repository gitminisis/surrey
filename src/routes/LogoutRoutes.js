import React, { lazy } from "react";

// project import
import Loadable from "../components/Loadable";

const AuthLogout = Loadable(
  lazy(() => import("../pages/authentication/Logout"))
);

// ==============================|| AUTH ROUTING ||============================== //

const LogoutRoutes = {
  path: "/logout",
  element: <AuthLogout />,
};

export default LogoutRoutes;
