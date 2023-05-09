import { Navigate, useRoutes } from "react-router-dom";
import Cookies from "js-cookie";
// project import
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";
import LogoutRoutes from "./LogoutRoutes";
import { useState } from "react";
import { isLoggedIn } from "utils/authentication";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

  return useRoutes([MainRoutes, LoginRoutes, LogoutRoutes]);
}
