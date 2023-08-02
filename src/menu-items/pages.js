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
  FlagOutlined
} from "@ant-design/icons";

// icons
// icons
const icons = {
  LoginOutlined,
  FlagOutlined,
  FileOutlined,
  FileSearchOutlined,
  HomeOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  DatabaseOutlined,
  ProfileOutlined

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
      id: "description-home",
      title: "Archives Home",
      type: "item",
      url: "/page/description-home",
      icon: icons.FileOutlined,
    },
    {
      id: "collections-home",
      title: "Artifact Home",
      type: "item",
      url: "/page/collections-home",
      icon: icons.FileSearchOutlined,
    },
    {
      id: "faq",
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
      icon: icons.SettingOutlined,
    },
    {
      id: "site-announcement",
      title: "Site Announcement",
      type: "item",
      url: "/site-announcement",
      icon: icons.FlagOutlined,
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
