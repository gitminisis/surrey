// assets
import DashboardIcon from "@mui/icons-material/Dashboard";

// icons
const icons = {
  DashboardIcon,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: icons.Dash,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
