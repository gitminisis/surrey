// assets
import { LoginOutlined, ProfileOutlined, FileOutlined} from "@ant-design/icons";

// icons
// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  FileOutlined,
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
      id: "login1",
      title: "Login",
      type: "item",
      url: "/login",
      icon: icons.LoginOutlined,
      target: true,
    },
    {
      id: "register1",
      title: "Register",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

export default pages;
