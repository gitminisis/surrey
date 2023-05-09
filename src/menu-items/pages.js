// assets
import {
  LoginOutlined,
  ProfileOutlined,
  FileOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

// icons
// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  FileOutlined,
  FileSearchOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "home-page",
      title: "Home Page",
      type: "item",
      url: "/page/home",
      icon: icons.FileOutlined,
    },
    {
      id: "artifact-home-page",
      title: "Artifact Search Page",
      type: "item",
      url: "/page/artifact-home",
      icon: icons.FileOutlined,
    },
    {
      id: "summary-fields",
      title: "Summary Page Fields",
      type: "item",
      url: "/fields/summary-home",
      icon: icons.FileSearchOutlined,
    },
    {
      id: "detail-fields",
      title: "Detail Page Fields",
      type: "item",
      url: "/fields/detail-fields",
      icon: icons.FileSearchOutlined,
    },
    {
      id: "logout",
      title: "Logout",
      type: "item",
      url: "/logout",
      icon: icons.LoginOutlined,
    },
  ],
};

export default pages;
