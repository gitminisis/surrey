// assets
import {
  LoginOutlined,
  ProfileOutlined,
  FileOutlined,
  FileSearchOutlined,
  HomeOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  DatabaseOutlined,
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
  QuestionCircleOutlined,
  DatabaseOutlined,
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
      id: "faq-page",
      title: "FAQ Page",
      type: "item",
      url: "/page/faq",
      icon: icons.QuestionCircleOutlined,
    },
    {
      id: "detail-fields",
      title: "Detail Fields",
      type: "item",
      url: "/detail-fields",
      icon: icons.DatabaseOutlined,
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
