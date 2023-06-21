// assets
import {
  LoginOutlined,
  ProfileOutlined,
  FileOutlined,
  FileSearchOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { SettingsOutlined } from "@mui/icons-material";

// icons
// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  FileOutlined,
  FileSearchOutlined,
  HomeOutlined,
  SettingsOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "union-home",
      title: "Union Home",
      type: "item",
      url: "/page/union-home",
      icon: icons.HomeOutlined,
    },
    {
      id: "description-home-page",
      title: "Archives Home",
      type: "item",
      url: "/page/description-home",
      icon: icons.FileOutlined,
    },
    {
      id: "collections-home-page",
      title: "Artifact Home",
      type: "item",
      url: "/page/collections-home",
      icon: icons.FileSearchOutlined,
    },
    {
      id: "site-layout",
      title: "Site Layout",
      type: "item",
      url: "/site-layout",
      icon: icons.SettingsOutlined,
    },
    // {
    //     id: "summary-fields",
    //     title: "Summary Page Fields",
    //     type: "item",
    //     url: "/fields/summary-home",
    //     icon: icons.FileSearchOutlined,
    // },
    // {
    //     id: "detail-fields",
    //     title: "Detail Page Fields",
    //     type: "item",
    //     url: "/fields/detail-fields",
    //     icon: icons.FileSearchOutlined,
    // },
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
